CREATE TABLE feedback (
 	id SERIAL NOT NULL,
    createdDate  TIMESTAMP DEFAULT timezone('utc', now()),
    properties jsonb NOT NULL,
    PRIMARY KEY (id)
);