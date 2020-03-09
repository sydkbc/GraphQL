const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema");
const cors = require("cors");

const app = express();
app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(8080, () => {
  console.log("Server started on PORT:8080");
});

// Example Queries that can be tested under http://localhost:5000/graphQL //
// Try one of the folllwoing queries                                      //
//
// {
//     launches {
//       flight_number,
//       mission_name,
//       launch_year,
//       launch_date_local,
//       launch_success,
//       rocket {
//         rocket_id
//         rocket_name
//         rocket_type
//       }
//     }
//   }
//
// {
//     launch(flight_number:3) {
//       flight_number
//       mission_name
//       launch_year
//       launch_date_local
//       launch_success
//     }
//   }
//
// {
//     rockets{
//       rocket_id,
//       rocket_name,
//       rocket_type
//     }
//   }
//
// {
//     rocket(id:2
//     ) {
//       rocket_id
//       rocket_name
//       rocket_type
//     }
//   }
