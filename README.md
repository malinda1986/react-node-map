
## Getting Started

## Demo link
http://truck-map.s3-website.us-east-2.amazonaws.com/home
## Built With
- typescript
- React 
- Material UI
- create-react-app
- express
- routing-controllers
- typedi
- docker

### Web app
 - cd in to consumers folder -> web
 - run ```yarn```

### Server
 - cd in to api folder
 - run ```yarn```


 ### App start 
 - root folder
 - run ```make start```

### Notes
- Frontend can be optimized further ( make ui components more re-usable)
- API validation using joi
- Data cached in server side and , its not the best option as it could grow, done the basic filtering for the data set, but can use libraries like fuzzysort, which is optimize for string search and can search 100k+ data set less than few milliseconds
- typedi for DI Container
- FE and BE can deploy as docker containers
- FE with react hooks
- I worked around 8-10hrs for this project