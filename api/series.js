const express = require('express');
const seriesRouter = express.Router();

// Test database allows testing suite to check routes without corrupting database
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database(process.env.TEST_DATABASE || './database.sqlite');

const issuesRouter = require('./issues.js');

// GET/PUT/DELETE route paths contain seriesId param
seriesRouter.param('seriesId', (req, res, next, seriesId) => {
  const sql = 'SELECT * FROM Series WHERE Series.id = $seriesId';
  const values = {$seriesId: seriesId};

  db.get(sql, values, (error, series) => {
    if (error) {
      next(error);
    } else if (series) {
      req.series = series;
      next();
    } else {
      res.sendStatus(404);
    }
  });
});

// Merges parameters. Allows access of info about specified series
// from issues router
seriesRouter.use('/:seriesId/issues', issuesRouter);

// Retrieves all existing comic book series
seriesRouter.get('/', (req, res, next) => {
  db.all('SELECT * FROM Series', (error, series) => {
    if (error) {
      next(error);
    } else {
      res.status(200).json({series: series});
    }
  });
});

// Retrieves comic book series specified by id
seriesRouter.get('/:seriesId', (req, res, next) => {
  res.status(200).json({series: req.series});
});

// Creates new entry for comic book series
seriesRouter.post('/', (req, res, next) => {
  const name = req.body.series.name;
  const description = req.body.series.description;

  if (!name || !description) {
    return res.sendStatus(400);
  }

  const sql = 'INSERT INTO Series (name, description) VALUES ($name, $description)';
  const values = {
    $name: name,
    $description: description
  };

  db.run(sql, values, function(error) {
    if (error) {
      next(error);
    } else {
      db.get(`SELECT * FROM Series WHERE Series.id = ${this.lastID}`,
        (error, series) => {
          res.status(201).json({series: series});
        });
    }
  });
});

// Updates comic book series specified by id
seriesRouter.put('/:seriesId', (req, res, next) => {
  const name = req.body.series.name;
  const description = req.body.series.description;

  if (!name || !description) {
    return res.sendStatus(400);
  }

  const sql = 'UPDATE Series SET name = $name, description = $description ' +
              'WHERE Series.id = $seriesId';
  const values = {
    $name: name,
    $description: description,
    $seriesId: req.params.seriesId
  };

  db.run(sql, values, function(error) {
    if (error) {
      next(error);
    } else {
      db.get(`SELECT * FROM Series WHERE Series.id = ${req.params.seriesId}`,
        (error, series) => {
          res.status(200).json({series: series});
        });
    }
  });
});

// Deletes comic book series specified by id
seriesRouter.delete('/:seriesId', (req, res, next) => {
  const issueSql = 'SELECT * FROM Issue WHERE Issue.series_id = $seriesId';
  const issueValues = {$seriesId: req.params.seriesId};

  db.get(issueSql, issueValues, (error, issue) => {
    if (error) {
      next(error);
    } else if (issue) {
      res.sendStatus(400);
    } else {
      const deleteSql = 'DELETE FROM Series WHERE Series.id = $seriesId';
      const deleteValues = {$seriesId: req.params.seriesId};

      db.run(deleteSql, deleteValues, (error) => {
        if (error) {
          next(error);
        } else {
          res.sendStatus(204);
        }
      });
    }
  });
});

module.exports = seriesRouter;