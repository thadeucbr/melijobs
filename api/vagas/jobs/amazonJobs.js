const vagaModel = require('../models/vagasModel');
const { default: axios } = require('axios');
const validJob = require('../utils/validJob');


const URL = 'https://www.amazon.jobs/en-gb/search.json?category%5B%5D=software-development&normalized_country_code%5B%5D=BRA&radius=24km&facets%5B%5D=normalized_country_code&facets%5B%5D=normalized_state_name&facets%5B%5D=normalized_city_name&facets%5B%5D=location&facets%5B%5D=business_category&facets%5B%5D=category&facets%5B%5D=schedule_type_id&facets%5B%5D=employee_class&facets%5B%5D=normalized_location&facets%5B%5D=job_function_id&facets%5B%5D=is_manager&facets%5B%5D=is_intern&offset=0&result_limit=10&sort=recent&latitude=&longitude=&loc_group_id=&loc_query=Brasil&base_query=&city=&country=BRA&region=&county=&query_options=&'

const amazonSaveJobs = async () => {
  const response = await axios.get(URL).catch(err => console.log(err.message));

  const jobs = response.data.jobs.map(({ id, posted_date, title, url_next_step, location }) => ({
    id,
    company: 'Amazon(BR)',
    name: title,
    sent: false,
    url: url_next_step,
    date: posted_date,
    location
  }));

  await Promise.all(jobs.map(async (job) => {
    if(validJob(job.name)) {
      const jobExist = await vagaModel.findOne({ id: job.id })
      if(jobExist) return;
      vagaModel.create(job);
    }
  }));
  
  console.log(Date())
  console.log('Amazon: Busca por vaga realizada.')
};

module.exports = amazonSaveJobs;