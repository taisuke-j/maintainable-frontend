module.exports = {
  user: {
    output: {
      mode: 'tags-split',
      client: 'react-query',
      target: 'gen/orval/user.ts',
      schemas: 'gen/orval/model',
      clean: true,
      mock: true,
    },
    input: {
      target: './reference/User-API.yaml',
    },
  },
};