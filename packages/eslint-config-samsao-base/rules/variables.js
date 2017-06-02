module.exports = {
  rules: {
    // disallow identifier that are too short
    'id-length': ['error', { exceptions: ['_', '@', '$', '#', 'i', 'j', 'x', 'y', 'z', 'id'] }],
  },
};
