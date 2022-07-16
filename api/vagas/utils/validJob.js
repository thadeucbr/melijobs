function validJob(job) {
  const jobs = ['bootcamp', 'back', 'node', 'ios', 'swift', 'js', 'javascript'];

  const ignoreJobs = [
    'php',
    'senior',
    'sr',
    'sênior',
    'c#',
    '.net',
    'python',
    'django',
    'c++',
  ];

  const ignoredJobs = ignoreJobs.some((item) => job.toLowerCase().includes(item));

  if (ignoredJobs) return false;

  const isValid = jobs.some((item) => job.toLowerCase().includes(item));

  return isValid;
}

module.exports = validJob;