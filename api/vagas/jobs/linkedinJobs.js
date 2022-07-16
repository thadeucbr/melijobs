const vagaModel = require('../models/vagasModel');

const { 
  LinkedinScraper,
  relevanceFilter,
  timeFilter,
  typeFilter,
  experienceLevelFilter,
  events,
} = require("linkedin-jobs-scraper");

const linkedinJobs = async () => {
  // Each scraper instance is associated with one browser.
  // Concurrent queries will run on different pages within the same browser instance.
  const scraper = new LinkedinScraper({
      headless: true,
      slowMo: 900,
      args: [
          "--lang=pt-BR",
      ],
  });

  // Add listeners for scraper events
  
  // Emitted once for each processed job
  scraper.on(events.scraper.data, async (data) => {
    console.log(data.jobId)
      let dbJob = await vagaModel.findOne({ id: data.jobId})
      if(!dbJob) vagaModel.create({
        id: data.jobId,
        company: data.company ? data.company : "N/A",
        name: data.title,
        sent: false,
        url: data.applyLink ? data.applyLink : data.link,
        date: data.date,
        location: data.location
      });
      if(!dbJob) console.log('Nova vaga adicionada')
      if(dbJob) console.log('Vaga já existe')
      // console.log(
      //     data.description.length,
      //     data.descriptionHTML.length,
      //     `Query='${data.query}'`,
      //     `Location='${data.location}'`,
      //     `Id='${data.jobId}'`,
      //     `Title='${data.title}'`,
      //     `Company='${data.company ? data.company : "N/A"}'`,
      //     `CompanyLink='${data.companyLink ? data.companyLink : "N/A"}'`,
      //     `CompanyImgLink='${data.companyImgLink ? data.companyImgLink : "N/A"}'`,
      //     `Place='${data.place}'`,
      //     `Date='${data.date}'`,
      //     `Link='${data.link}'`,
      //     `applyLink='${data.applyLink ? data.applyLink : "N/A"}'`,
      //     `insights='${data.insights}'`,
      // );
  });
  
  // Emitted once for each scraped page
  scraper.on(events.scraper.metrics, (metrics) => {
      console.log(`Processed=${metrics.processed}`, `Failed=${metrics.failed}`, `Missed=${metrics.missed}`);        
  });

  scraper.on(events.scraper.error, (err) => {
      console.error(err);
  });

  scraper.on(events.scraper.end, () => {
      console.log('LinkedIn: Busca por vaga realizada.');
  });

  // Custom function executed on browser side to extract job description [optional]
  const descriptionFn = () => document.querySelector(".jobs-description")
      .innerText
      .replace(/[\s\n\r]+/g, " ")
      .trim();

  // Run queries concurrently    
  await Promise.all([
      // Run queries serially
      scraper.run([
          {
              query: "NodeJS",
              options: {
                  locations: ["Brazil", "Portugal"], // This will override global options ["Europe"],
                  filters: {
                    time: timeFilter.DAY,
                    experience: [experienceLevelFilter.ENTRY_LEVEL, experienceLevelFilter.ASSOCIATE],
                      type: [typeFilter.FULL_TIME, typeFilter.CONTRACT],
                      applyLink: true, // Try to extract apply link. Default to true.   
                  },       
              }                                                       
          },
      ]),
  ]);

  // Close browser
  await scraper.close();
};

module.exports = linkedinJobs;