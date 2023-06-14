SELECT * FROM resource_db;

SELECT department, COUNT(id) AS number_courses
FROM resource_db
GROUP BY department;

SELECT department, SUM(total_enrolled) AS sum_enrolled
FROM resource_db
GROUP BY department;
