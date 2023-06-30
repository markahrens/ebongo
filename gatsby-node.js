const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const zeroPad = (num, places) => String(num).padStart(places, '0');

  for (let i = 1; i <= 10000; i++) { 
    actions.createPage({
        path: 'stop/'+zeroPad(i,4),
        component: path.resolve(`src/templates/stop.js`),
        context: {number: i}
    })
  }
}