issuesRouter.param('issueId', (req, res, next, issueId) => {
    const sql = 'SELECT * FROM Issue WHERE Issue.id = $issueId';
    const values = {$issueId : issueId};
    db.get(sql, values, (error, row) => {
        if(error) {
            next(error);
        } else if(row) {
            next();
        } else {
            res.status(404).send();
        }
    });
});