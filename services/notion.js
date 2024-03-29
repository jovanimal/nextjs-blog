const dotenv = require('dotenv').config();
const { Client } = require('@notionhq/client');

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

module.exports = async function getTasks() {
  const payload = {
    path: `databases/${process.env.NOTION_DATABASE_ID}/query`,
    method: 'POST',
  };
  const { results } = await notion.request(payload);

  console.log(results)
  const tasks = results.map(page => {
    // console.log(page.properties.Description);
    return {
      id: page.id,
      title: page.properties.Name.title[0].text.content,
      date: page.properties.Date.date.start,
      tags: page.properties.Tags.multi_select[0].name,
      description: page.properties.Description.rich_text[0] && page.properties.Description.rich_text[0].text.content,
    };
  });
  return tasks;
};
