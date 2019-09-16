/* eslint-disable consistent-return */
/* eslint-disable radix */
/* eslint-disable no-console */
import express from 'express';
import people from '../dummy/people';

const app = express();

app.use(express.json());

app.get('/people', (req, res) => {
  res.status(200).json({
    status: 200,
    message: 'Success',
    data: people,
  });
});

app.get('/people/:id', (req, res) => {
  const person = people.find((p) => p.id === parseInt(req.params.id));

  if (!person) {
    return res.status(404).json({
      status: 404,
      message: 'person with id not availabe',
    });
  }

  return res.status(200).json({
    status: 200,
    message: 'Success',
    data: person,
  });
});

app.post('/people', (req, res) => {
  const person = {
    id: people.length + 1,
    name: req.body.name,
  };

  people.push(person);
  res.status(200).json({
    status: 200,
    message: 'Success',
    data: person,
  });
});

app.put('/people/:id', (req, res) => {
  const person = people.find((p) => p.id === parseInt(req.params.id));

  if (!person) {
    return res.status(404).json({
      status: 404,
      message: 'person with id not availabe',
    });
  }

  person.id = req.body.id;
  person.name = req.body.name;
  res.status(200).json({
    status: 200,
    message: 'Success',
    data: person,
  });
});

app.delete('/people/:id', (req, res) => {
  const person = people.find((p) => p.id === parseInt(req.params.id));

  if (!person) {
    return res.status(404).json({
      status: 404,
      message: 'person with id not availabe',
    });
  }

  const index = people.indexOf(person);
  people.splice(index, 1);

  res.status(200).json({
    status: 200,
    message: 'Success',
    data: person,
  });
});

module.exports = app;
