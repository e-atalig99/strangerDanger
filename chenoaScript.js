L.mapbox.accessToken = 'pk.eyJ1IjoiY2R0MjEzMiIsImEiOiI2Y2FlMWJhM2M3Njg5ZjAwOWM1NGEzM2EwN2U4NmJiZiJ9.lGfO7MtcvWS0vgHLQBs8pw';
var map = L.mapbox.map('map', 'cdt2132.n18ohp1i')
  .setView([40.742636, -73.992233], 12);

var myLayer = L.mapbox.featureLayer().addTo(map);
var geojson = {
    //type: 'FeatureCollection',

    // This is an array of Map Point objects
   features: [
{
        type: 'Feature',
        properties: {
            title: 'Brooklyn Bridge Park<br />',
            description: '<br /> "Best park in New York, clean, nice view, and the ferry is close by."',
             image: "fendi.png",
            'marker-color': '#008000',
            'marker-size': 'small',
            'marker-symbol': 'park2',
        },
        geometry: {
            type: 'Point',
            coordinates: [-73.996224, 40.701451]
        }
    },
    {
        type: 'Feature',
        properties: {
            title: 'Tompkins Square Park<br />',
            description: '<br /> "This was a great park to stop at during my walk around the city."',
             image: "fendi.png",
            'marker-color': '#008000',
            'marker-size': 'small',
            'marker-symbol': 'park2',
        },
        geometry: {
            type: 'Point',
            coordinates: [-73.981633, 40.726092]
        }
    },
    {
        type: 'Feature',
        properties: {
            title: 'Saint Mary Park<br />',
            description: '<br /> The park is great during warmer days. Also its not pack and congested like other parks in the city. The boulders out-crops are related to those in central park.',
             image: "fendi.png",
            'marker-color': '#008000',
            'marker-size': 'small',
            'marker-symbol': 'park2',
        },
        geometry: {
            type: 'Point',
            coordinates: [-73.923783, 40.833724]
        }
    },
    {
        type: 'Feature',
        properties: {
            title: 'Crotona Park<br />',
            description: '<br /> Nice place to take long walks, love the setting.',
             image: "fendi.png",
            'marker-color': '#008000',
            'marker-size': 'small',
            'marker-symbol': 'park2',
        },
        geometry: {
            type: 'Point',
            coordinates: [-73.896961, 40.839169]
        }
    },
    {
        type: 'Feature',
        properties: {
            title: 'Claremont Park<br />',
            description: '<br /> Good track courses',
             image: "fendi.png",
            'marker-color': '#008000',
            'marker-size': 'small',
            'marker-symbol': 'park2',
        },
        geometry: {
            type: 'Point',
            coordinates: [-73.907003, 40.841492]
        }
    },
    {
        type: 'Feature',
        properties: {
            title: 'Mullaly Park<br />',
            description: '<br /> good park! there is a playground for kids, its very nice if you want to make a garden party. ',
             image: "fendi.png",
            'marker-color': '#A869C8',
            'marker-size': 'small',
            'marker-symbol': 'playground',
        },
        geometry: {
            type: 'Point',
            coordinates: [-73.923783, 40.833724]
        }
    },
    {
        type: 'Feature',
        properties: {
            title: 'Imagination Playground<br />',
            description: '<br /> Staffed every day with great people helping kids learn and play together. Great sand box and a ton of building blocks. Great for kids under 10. ',
             image: "fendi.png",
            'marker-color': '#A869C8',
            'marker-size': 'small',
            'marker-symbol': 'playground',
        },
        geometry: {
            type: 'Point',
            coordinates: [-74.004030, 40.706110]
        }
    },
    {
        type: 'Feature',
        properties: {
            title: 'Crowley Playground<br />',
            description: '<br /> Nice ParK!! ',
             image: "fendi.png",
            'marker-color': '#A869C8',
            'marker-size': 'small',
            'marker-symbol': 'playground',
        },
        geometry: {
            type: 'Point',
            coordinates: [-73.879946, 40.729458]
        }
    },
    {
        type: 'Feature',
        properties: {
            title: 'Ampere Playground<br />',
            description: '<br /> Nice ParK!! ',
             image: "fendi.png",
            'marker-color': '#A869C8',
            'marker-size': 'small',
            'marker-symbol': 'playground',
        },
        geometry: {
            type: 'Point',
            coordinates: [-73.856884, 40.681602]
        }
    },
    {
        type: 'Feature',
        properties: {
            title: 'Power Playground<br />',
            description: '<br /> Great ParK!! ',
             image: "fendi.png",
            'marker-color': '#A869C8',
            'marker-size': 'small',
            'marker-symbol': 'playground',
        },
        geometry: {
            type: 'Point',
            coordinates: [-73.927348, 40.618143]
        }
    },
    {
        type: 'Feature',
        properties: {
            title: 'Pier 51 Playground<br />',
            description: '<br /> New and clean. Great place to stop after Scuddering along the Hudson. ',
             image: "fendi.png",
            'marker-color': '#A869C8',
            'marker-size': 'small',
            'marker-symbol': 'playground',
        },
        geometry: {
            type: 'Point',
            coordinates: [-74.010486, 40.733975]
        }
    },
    {
        type: 'Feature',
        properties: {
            title: 'Bildersee Playground<br />',
            description: '<br /> Nice ParK!! ',
             image: "fendi.png",
            'marker-color': '#A869C8',
            'marker-size': 'small',
            'marker-symbol': 'playground',
        },
        geometry: {
            type: 'Point',
            coordinates: [-73.911824, 40.635653]
        }
    },
    {
        type: 'Feature',
        properties: {
            title: 'Dutch Kills Playground<br />',
            description: '<br /> Who is Dutch and why is he killing playgrounds?! but, Great ParK!! ',
             image: "fendi.png",
            'marker-color': '#A869C8',
            'marker-size': 'small',
            'marker-symbol': 'playground',
        },
        geometry: {
            type: 'Point',
            coordinates: [-73.933227, 40.757127]
        }
    },
    {
        type: 'Feature',
        properties: {
            title: 'Glendale Playground<br />',
            description: '<br /> Nice ParK!! ',
             image: "fendi.png",
            'marker-color': '#A869C8',
            'marker-size': 'small',
            'marker-symbol': 'playground',
        },
        geometry: {
            type: 'Point',
            coordinates: [-73.881784, 40.705013]
        }
    },
    {
        type: 'Feature',
        properties: {
            title: 'Centreville Playground<br />',
            description: '<br /> Its a nice small playground, with two jungle gyms and tire swings, it has a ball park nearby. The actual playground is very city like, but the ball park nearby makes up for it. ',
             image: "fendi.png",
            'marker-color': '#A869C8',
            'marker-size': 'small',
            'marker-symbol': 'playground',
        },
        geometry: {
            type: 'Point',
            coordinates: [-73.837305, 40.673014]
        }
    },
    {
        type: 'Feature',
        properties: {
            title: 'Playgarden<br />',
            description: '<br /> Playgarden is a great place for kids to play and take classes.  The indoor play area is amazing and all the staff are friendly and fun.  Birthday parties there are a blast.',
             image: "fendi.png",
            'marker-color': '#A869C8',
            'marker-size': 'small',
            'marker-symbol': 'playground',
        },
        geometry: {
            type: 'Point',
            coordinates: [-73.959035, 40.735713]
        }
    },
    {
        type: 'Feature',
        properties: {
            title: 'Jennifers Playground<br />',
            description: '<br /> ts the best park I went it is number 1 ',
             image: "fendi.png",
            'marker-color': '#A869C8',
            'marker-size': 'small',
            'marker-symbol': 'playground',
        },
        geometry: {
            type: 'Point',
            coordinates: [-74.163081, 40.620184]
        }
    },
    {
        type: 'Feature',
        properties: {
            title: 'De Matti Playground<br />',
            description: '<br /> beautiful park!',
             image: "fendi.png",
            'marker-color': '#A869C8',
            'marker-size': 'small',
            'marker-symbol': 'playground',
        },
        geometry: {
            type: 'Point',
            coordinates: [-74.074256, 40.614508]
        }
    },
    {
        type: 'Feature',
        properties: {
            title: 'Vesuvio Playground<br />',
            description: '<br /> great place for kids to play!',
             image: "fendi.png",
            'marker-color': '#A869C8',
            'marker-size': 'small',
            'marker-symbol': 'playground',
        },
        geometry: {
            type: 'Point',
            coordinates: [-74.002561, 40.725367]
        }
    },
    {
        type: 'Feature',
        properties: {
            title: 'Rudin Family Playground<br />',
            description: '<br /> great for little kids. lots of slides and structures.  great sprinkler.  has a good tire swing. lots of space to run around.',
             image: "fendi.png",
            'marker-color': '#A869C8',
            'marker-size': 'small',
            'marker-symbol': 'playground',
        },
        geometry: {
            type: 'Point',
            coordinates: [-73.963888, 40.791902]
        }
    },
    {
        type: 'Feature',
        properties: {
            title: 'Heckscher Playground<br />',
            description: '<br /> One of the best playgrounds in central park. Great water features.',
             image: "fendi.png",
            'marker-color': '#A869C8',
            'marker-size': 'small',
            'marker-symbol': 'playground',
        },
        geometry: {
            type: 'Point',
            coordinates: [-73.973996, 40.769437]
        }
    },
    {
        type: 'Feature',
        properties: {
            title: 'Clawson Playground<br />',
            description: '<br /> Nice Park!',
             image: "fendi.png",
            'marker-color': '#A869C8',
            'marker-size': 'small',
            'marker-symbol': 'playground',
        },
        geometry: {
            type: 'Point',
            coordinates: [-74.123927, 40.560938]
        }
    },
    {
        type: 'Feature',
        properties: {
            title: 'Schmul Playground<br />',
            description: '<br /> Nice Playground!!',
             image: "fendi.png",
            'marker-color': '#A869C8',
            'marker-size': 'small',
            'marker-symbol': 'playground',
        },
        geometry: {
            type: 'Point',
            coordinates: [-74.185280, 40.588448]
        }
    },
    {
        type: 'Feature',
        properties: {
            title: 'Alexander Hamilton Playground<br />',
            description: '<br /> Family and fun space for the kids to run around and you can just sit an watch',
             image: "fendi.png",
            'marker-color': '#A869C8',
            'marker-size': 'small',
            'marker-symbol': 'playground',
        },
        geometry: {
            type: 'Point',
            coordinates: [-73.951225, 40.823037]
        }
    },
    {
        type: 'Feature',
        properties: {
            title: 'Wright Brothers Playground<br />',
            description: '<br /> an active PAL presence athletically making life fun for the kids and a mixture of cultures that demonstrated a oneness in the area. Im happy a venue as stable and unique as the park is apparently there for many years to come.',
             image: "fendi.png",
            'marker-color': '#A869C8',
            'marker-size': 'small',
            'marker-symbol': 'playground',
        },
        geometry: {
            type: 'Point',
            coordinates: [-73.941768, 40.831688]
        }
    },
    {
        type: 'Feature',
        properties: {
            title: 'Soundview Park<br />',
            description: '<br /> Its a very clean park, mainly due to the prohibition of BBQing. I find it widely safe. I usually come here with family and we spend a beautiful and meaningful day. Overall is quiet, and I would recommend.',
             image: "fendi.png",
            'marker-color': '#008000',
            'marker-size': 'small',
            'marker-symbol': 'park2',
        },
        geometry: {
            type: 'Point',
            coordinates: [-73.871384, 40.818127]
        }
    },
    {
        type: 'Feature',
        properties: {
            title: 'Madison Square Park<br />',
            description: '<br /> A great park to come and relax after a long day of walking around. There are plenty of benches to sit, lawns to lay down on or have picnics, a nice sized dog park, you will be able to spend hours here. The views of the Flat Iron and the Empire State building are amazing. This is definitely one of the better parks in NYC.',
             image: "fendi.png",
            'marker-color': '#008000',
            'marker-size': 'small',
            'marker-symbol': 'park2',
        },
        geometry: {
            type: 'Point',
            coordinates: [-73.988285, 40.742420]
        }
    },
    {
        type: 'Feature',
        properties: {
            title: 'Chelsea Park<br />',
            description: '<br /> Great park!',
             image: "fendi.png",
            'marker-color': '#008000',
            'marker-size': 'small',
            'marker-symbol': 'park2',
        },
        geometry: {
            type: 'Point',
            coordinates: [-74.000945, 40.750055]
        }
    },
    {
        type: 'Feature',
        properties: {
            title: 'Bryant Park<br />',
            description: '<br /> Love people-watching, picnicing and the host of activities this park offers.  The other evening there was even a massive game of musical chairs -- makes me notice and love the diversity and whimsy that exists in NYC.',
             image: "fendi.png",
            'marker-color': '#008000',
            'marker-size': 'small',
            'marker-symbol': 'park2',
        },
        geometry: {
            type: 'Point',
            coordinates: [-73.983049, 40.753059]
        }
    },
    {
        type: 'Feature',
        properties: {
            title: 'Carl Schurz Park<br />',
            description: '<br /> This is an amazing park. Loads of space for kids to run around, its super well kept, and there are separate dog runs for large and small dogs. I think a highlight is that the small dog run is on cement and is raised from the walkway, so people can watch the dogs play around eye level. Very unique design. I have been coming here for couple weeks with my dogs and I am very happy to have moved into the area.',
             image: "fendi.png",
            'marker-color': '#008000',
            'marker-size': 'small',
            'marker-symbol': 'park2',
        },
        geometry: {
            type: 'Point',
            coordinates: [-73.983049, 40.753059]
        }
    },
    {
        type: 'Feature',
        properties: {
            title: 'Sunset Park<br />',
            description: '<br /> This is a great place to come in the fall to see the sunset. It is the highest elevation and you can see Manhattan, boats going to their destinations. They have a lot of benches and open grass you can sit anywhere.',
             image: "fendi.png",
            'marker-color': '#008000',
            'marker-size': 'small',
            'marker-symbol': 'park2',
        },
        geometry: {
            type: 'Point',
            coordinates: [-74.003305, 40.647905]
        }
    },
    {
        type: 'Feature',
        properties: {
            title: 'Evergreen Park<br />',
            description: '<br /> Love this place. Go running here every day. It is safe, lots of spots for kids to play, a fountain, and it is kept clean.',
             image: "fendi.png",
            'marker-color': '#008000',
            'marker-size': 'small',
            'marker-symbol': 'park2',
        },
        geometry: {
            type: 'Point',
            coordinates: [-73.896704, 40.697607]
        }
    },
    {
        type: 'Feature',
        properties: {
            title: 'Phil "Scooter" Rizzuto Park<br />',
            description: '<br /> Great Park! Love the events!',
             image: "fendi.png",
            'marker-color': '#008000',
            'marker-size': 'small',
            'marker-symbol': 'park2',
        },
        geometry: {
            type: 'Point',
            coordinates: [-73.820915, 40.694313]
        }
    },
    {
        type: 'Feature',
        properties: {
            title: 'Rufus King Park<br />',
            description: '<br /> The park has maintained quite an improvement, from the days of yester year, love the setting.',
             image: "fendi.png",
            'marker-color': '#008000',
            'marker-size': 'small',
            'marker-symbol': 'park2',
        },
        geometry: {
            type: 'Point',
            coordinates: [-73.804092, 40.702903]
        }
    },
     {
        type: 'Feature',
        properties: {
            title: 'Roy Wilkins Southern Queens Park<br />',
            description: '<br /> I like when the Universoul Circus comes in to town, it is so fun. Overall, it is a nice place to be during the summer👍',
             image: "fendi.png",
            'marker-color': '#008000',
            'marker-size': 'small',
            'marker-symbol': 'park2',
        },
        geometry: {
            type: 'Point',
            coordinates: [-73.770704, 40.685600]
        }
    },
     {
        type: 'Feature',
        properties: {
            title: 'Idlewild Park<br />',
            description: '<br /> I love how it is set in the woods and there is a lot of shade. I love the history of the park, and how there is a great sized area for the little ones to enjoy themselves. Story Book Forest is so much fun for the little ones, and Daniel Tigers Neighborhood is a treat. Soak Zone has stuff for all ages, and you are able to rent out cabanas to have a nice, shaded area. It is our favorite place to go!',
             image: "fendi.png",
            'marker-color': '#008000',
            'marker-size': 'small',
            'marker-symbol': 'park2',
        },
        geometry: {
            type: 'Point',
            coordinates: [-73.756542, 40.655279]
        }
    },
     {
        type: 'Feature',
        properties: {
            title: 'Prospect Park<br />',
            description: '<br /> It was a great experience and it is a huge park. Anytime I visit family I drive past it. It is a great place to have picnics or just go for a day. Especially Lakeside (a portion of the park) it has boat rentals, bike and cart rentals, and a roller skating rink. It is overall great place. I recommend to everyone',
             image: "fendi.png",
            'marker-color': '#008000',
            'marker-size': 'small',
            'marker-symbol': 'park2',
        },
        geometry: {
            type: 'Point',
            coordinates: [-73.971033, 40.659365]
        }
    },
     {
        type: 'Feature',
        properties: {
            title: 'HighLand Park<br />',
            description: '<br /> This place is awesome and so pretty u should check it out',
             image: "fendi.png",
            'marker-color': '#008000',
            'marker-size': 'small',
            'marker-symbol': 'park2',
        },
        geometry: {
            type: 'Point',
            coordinates: [-73.886490, 40.687334]
        }
    },
    {
        type: 'Feature',
        properties: {
            title: 'West Playground<br />',
            description: '<br /> Great Park!!',
             image: "fendi.png",
            'marker-color': '#A869C8',
            'marker-size': 'small',
            'marker-symbol': 'playground',
        },
        geometry: {
            type: 'Point',
            coordinates: [-73.970068, 40.586520]
        }
    },
    {
        type: 'Feature',
        properties: {
            title: 'Seth Low Playground<br />',
            description: '<br /> it is a great playground  but some people vandalize it and things get broken like swings sprinkelers ect.......but I truly love it',
             image: "fendi.png",
            'marker-color': '#A869C8',
            'marker-size': 'small',
            'marker-symbol': 'playground',
        },
        geometry: {
            type: 'Point',
            coordinates: [-73.986547, 40.607829]
        }
    },
    {
        type: 'Feature',
        properties: {
            title: 'McKinley Park<br />',
            description: '<br /> Nice park to walk to either from Bay Ridge side of the highway or Dyker Heights. It is a nice place to do some laps with some playgrounds for the kids.',
             image: "fendi.png",
            'marker-color': '#008000',
            'marker-size': 'small',
            'marker-symbol': 'park2',
        },
        geometry: {
            type: 'Point',
            coordinates: [-74.016867, 40.627022]
        }
    },
    {
        type: 'Feature',
        properties: {
            title: 'Dome Playground<br />',
            description: '<br />Great Playground!',
             image: "fendi.png",
            'marker-color': '#A869C8',
            'marker-size': 'small',
            'marker-symbol': 'playground',
        },
        geometry: {
            type: 'Point',
            coordinates: [-73.980367, 40.638320]
        }
    },
    {
        type: 'Feature',
        properties: {
            title: 'Bill Brown Playground<br />',
            description: '<br /> Great Park for the entire family! Clean and nice public',
             image: "fendi.png",
            'marker-color': '#A869C8',
            'marker-size': 'small',
            'marker-symbol': 'playground',
        },
        geometry: {
            type: 'Point',
            coordinates: [-73.945670, 40.591993]
        }
    },
    {
        type: 'Feature',
        properties: {
            title: 'Central Park<br />',
            description: '<br /> Amazing. Truly the "lungs" of NYC. A vast space accompanies several fun activities from simply walking the park and enjoying its features, to enjoying the museums surrounding it.',
             image: "fendi.png",
            'marker-color': '#008000',
            'marker-size': 'small',
            'marker-symbol': 'park2',
        },
        geometry: {
            type: 'Point',
            coordinates: [-73.958244, 40.773812]
        }
    },
    {
        type: 'Feature',
        properties: {
            title: 'Inwood Hill Park<br />',
            description: '<br /> A quiet, beautiful and colourful park at the very north of Manhattan island.',
             image: "fendi.png",
            'marker-color': '#008000',
            'marker-size': 'small',
            'marker-symbol': 'park2',
        },
        geometry: {
            type: 'Point',
            coordinates: [-73.925071, 40.870243]
        }
    },
     {
        type: 'Feature',
        properties: {
            title: 'Fairview Park<br />',
            description: '<br /> Nice Park',
             image: "fendi.png",
            'marker-color': '#008000',
            'marker-size': 'small',
            'marker-symbol': 'park2',
        },
        geometry: {
            type: 'Point',
            coordinates: [-74.230671, 40.532866]
        }
    },
    {
        type: 'Feature',
        properties: {
            title: 'Great Kills Park<br />',
            description: '<br /> An amazing place to relax and spend some quality time with your family and friends!',
             image: "fendi.png",
            'marker-color': '#008000',
            'marker-size': 'small',
            'marker-symbol': 'park2',
        },
        geometry: {
            type: 'Point',
            coordinates: [-74.230671, 40.532866]
        }
    },
     {
        type: 'Feature',
        properties: {
            title: 'Latourette Park<br />',
            description: '<br /> he course is the best I have played in the 5 boroughs so far.',
             image: "fendi.png",
            'marker-color': '#008000',
            'marker-size': 'small',
            'marker-symbol': 'park2',
        },
        geometry: {
            type: 'Point',
            coordinates: [-74.152222, 40.572466]
        }
    },
    {
        type: 'Feature',
        properties: {
            title: 'Ocean Breeze Park<br />',
            description: '<br /> Love this park!',
             image: "fendi.png",
            'marker-color': '#008000',
            'marker-size': 'small',
            'marker-symbol': 'park2',
        },
        geometry: {
            type: 'Point',
            coordinates: [-74.075146, 40.585178]
        }
    },
     {
        type: 'Feature',
        properties: {
            title: 'Long Pond Park<br />',
            description: '<br /> Pretty Grass & Great Community',
             image: "fendi.png",
            'marker-color': '#008000',
            'marker-size': 'small',
            'marker-symbol': 'park2',
        },
        geometry: {
            type: 'Point',
            coordinates: [-74.228096, 40.511661]
        }
    },
    {
        type: 'Feature',
        properties: {
            title: 'Wolfes Pond Park<br />',
            description: '<br /> Wolfe’s Pond Park is one of Staten Island’s largest green spaces. As one of Staten Islands largest parks, Wolfes Pond Park shows a wildlife and plant preserve. Also its a nice  recreation area with space to run, jump, and climb.',
             image: "fendi.png",
            'marker-color': '#008000',
            'marker-size': 'small',
            'marker-symbol': 'park2',
        },
        geometry: {
            type: 'Point',
            coordinates: [-74.195738, 40.524319]
        }
    },
     {
        type: 'Feature',
        properties: {
            title: 'Willowbrook Park<br />',
            description: '<br /> Pleasantly quiet park. Not much to do but not a bad place to relax either.',
             image: "fendi.png",
            'marker-color': '#008000',
            'marker-size': 'small',
            'marker-symbol': 'park2',
        },
        geometry: {
            type: 'Point',
            coordinates: [-74.157887, 40.600690]
        }
    },
    {
        type: 'Feature',
        properties: {
            title: 'Mariners Marsh Park<br />',
            description: '<br /> Nice Park!!',
             image: "fendi.png",
            'marker-color': '#008000',
            'marker-size': 'small',
            'marker-symbol': 'park2',
        },
        geometry: {
            type: 'Point',
            coordinates: [-74.174023, 40.629668]
        }
    },
     {
        type: 'Feature',
        properties: {
            title: 'CPL. Thompson Park<br />',
            description: '<br /> Nice Park!!',
             image: "fendi.png",
            'marker-color': '#008000',
            'marker-size': 'small',
            'marker-symbol': 'park2',
        },
        geometry: {
            type: 'Point',
            coordinates: [-74.101410, 40.636760]
        }
    },
    {
        type: 'Feature',
        properties: {
            title: 'Allison Park<br />',
            description: '<br /> Nice Park!',
             image: "fendi.png",
            'marker-color': '#008000',
            'marker-size': 'small',
            'marker-symbol': 'park2',
        },
        geometry: {
            type: 'Point',
            coordinates: [-74.101410, 40.636760]
        }
    },
     {
        type: 'Feature',
        properties: {
            title: 'Tappen Park<br />',
            description: '<br /> So fun,just to hang with friends or family.love this park !!',
             image: "fendi.png",
            'marker-color': '#008000',
            'marker-size': 'small',
            'marker-symbol': 'park2',
        },
        geometry: {
            type: 'Point',
            coordinates: [-74.077034, 40.626860]
        }
    },
    {
        type: 'Feature',
        properties: {
            title: 'Clove Lakes Park<br />',
            description: '<br /> It is a pretty decent park with a pond that adds to its beautiful scenery. It has a nice trial that I like to go biking on.',
             image: "fendi.png",
            'marker-color': '#008000',
            'marker-size': 'small',
            'marker-symbol': 'park2',
        },
        geometry: {
            type: 'Point',
            coordinates: [-74.113255, 40.617371]
        }
    },
    {
        type: 'Feature',
        properties: {
            title: 'The High Line<br />',
            description: '<br /> It is a very unique park thats built based on abandoned railway. However the scenery wasnt that beautiful and i think this is overrated. Nice place if you enjoy a long walk though.',
             image: "fendi.png",
            'marker-color': '#008000',
            'marker-size': 'small',
            'marker-symbol': 'park2',
        },
        geometry: {
            type: 'Point',
            coordinates: [-74.004593, 40.747597]
    }
    },
   
{
    //start of bronx precincts
        type: 'Feature',
        properties: {
            title: '47th Precinct 4111 Laconia Avenue, Bronx, NY 10466<br/>',
            'marker-color': '#0000FF',
            'marker-size': 'small',
            'marker-symbol': 'police',
        },
        geometry: {
            type: 'Point',
            coordinates: [-73.847523, 40.887432]
        }
    },
      {
        type: 'Feature',
        properties: {
            title: '40th Precinct 257 Alexander Avenue, Bronx, NY 10454<br />',
            'marker-color': '#0000FF',
            'marker-size': 'small',
            'marker-symbol': 'police',
        },
        geometry: {
            type: 'Point',
            coordinates: [-73.925283, 40.810353]
        }
    },
    {
        type: 'Feature',
        properties: {
            title: '44th Precinct Police, 2 E 169th St, Bronx, NY 10452<br />',
            'marker-color': '#0000FF',
            'marker-size': 'small',
            'marker-symbol': 'police',
        },
        geometry: {
            type: 'Point',
            coordinates: [-73.919706, 40.837650]
        }
    },
    {
        type: 'Feature',
        properties: {
            title: 'Bronx 49 Precinct Police Department, 2121 Eastchester Rd, Bronx, NY 10461<br />',
            'marker-color': '#0000FF',
            'marker-size': 'small',
            'marker-symbol': 'police',
        },
        geometry: {
            type: 'Point',
            coordinates: [-73.844454, 40.856082]
        }
    },
    {
        type: 'Feature',
        properties: {
            title: 'New York City Police Department: 106th Precinct, 10353 101st St, Jamaica, NY 11417<br />',
            'marker-color': '#0000FF',
            'marker-size': 'small',
            'marker-symbol': 'police',
        },
        geometry: {
            type: 'Point',
            coordinates: [-73.839718, 40.682174]
        }
    },
    {
        type: 'Feature',
        properties: {
            title: 'New York Police Department 103 precinct, 16802 91st Ave, Jamaica, NY 11432<br />',
            'marker-color': '#0000FF',
            'marker-size': 'small',
            'marker-symbol': 'police',
        },
        geometry: {
            type: 'Point',
            coordinates: [-73.792576, 40.707076]
        }
    },
 {
        type: 'Feature',
        properties: {
            title: '50th Precinct 3450 Kingsbridge Avenue, Bronx, NY 10463<br />',
            'marker-color': '#0000FF',
            'marker-size': 'small',
            'marker-symbol': 'police',
        },
        geometry: {
            type: 'Point',
            coordinates: [-73.902377,40.883588]
        }
    },
{
        type: 'Feature',
        properties: {
            title: '42nd Precinct 830 Washington Avenue, Bronx, NY 10451<br />',
            'marker-color': '#0000FF',
            'marker-size': 'small',
            'marker-symbol': 'police',
        },
        geometry: {
            type: 'Point',
            coordinates: [-73.911248,40.822469]
        }
    },
    {
        type: 'Feature',
        properties: {
            title: '46th Precinct 2120 Ryer Avenue, Bronx, NY 10457<br />',
            'marker-color': '#0000FF',
            'marker-size': 'small',
            'marker-symbol': 'police',
        },
        geometry: {
            type: 'Point',
            coordinates: [-73.900125,40.853993]
        }
    },
     {
        type: 'Feature',
        properties: {
            title: '45th Precinct 2877 Barkley Avenue, Bronx, NY 10465<br />',
            'marker-color': '#0000FF',
            'marker-size': 'small',
            'marker-symbol': 'police',
        },
        geometry: {
            type: 'Point',
            coordinates: [-73.827352,40.830839]
        }
    },
 {
        type: 'Feature',
        properties: {
            title: '48th Precinct 450 CrossBronx Expressway, Bronx, NY 10457<br />',
            'marker-color': '#0000FF',
            'marker-size': 'small',
            'marker-symbol': 'police',
        },
        geometry: {
            type: 'Point',
            coordinates: [-73.900364,40.843895]
        }
    },
    //start of brooklyn precinct
    {
        type: 'Feature',
        properties: {
            title: '94th Precinct 100 Meserole Avenue, Brooklyn, NY 11222<br />',
            'marker-color': '#0000FF',
            'marker-size': 'small',
            'marker-symbol': 'police',
        },
        geometry: {
            type: 'Point',
            coordinates: [-73.952838,40.727007]
        }
    },
     {
        type: 'Feature',
        properties: {
            title: '60th Precinct 2951 West 8th Street, Brooklyn, NY 11224<br />',
            'marker-color': '#0000FF',
            'marker-size': 'small',
            'marker-symbol': 'police',
        },
        geometry: {
            type: 'Point',
            coordinates: [-73.976151,40.576607]
        }
    }, 
    {
        type: 'Feature',
        properties: {
            title: '71st Precinct 421 Empire Boulevard, Brooklyn, NY 11225<br />',
            'marker-color': '#0000FF',
            'marker-size': 'small',
            'marker-symbol': 'police',
        },
        geometry: {
            type: 'Point',
            coordinates: [-73.947909,40.664581]
        }
    }, 
    {
        type: 'Feature',
        properties: {
            title: '72nd Precinct 830 4th Avenue, Brooklyn, NY 11232<br />',
            'marker-color': '#0000FF',
            'marker-size': 'small',
            'marker-symbol': 'police',
        },
        geometry: {
            type: 'Point',
            coordinates: [-74.000872,40.658346]
        }
    },
     {
        type: 'Feature',
        properties: {
            title: '67th Precinct 2820 Snyder Avenue, Brooklyn, NY 11226<br />',
            'marker-color': '#0000FF',
            'marker-size': 'small',
            'marker-symbol': 'police',
        },
        geometry: {
            type: 'Point',
            coordinates: [-73.950248,40.648702]
        }
    }, 
    {
        type: 'Feature',
        properties: {
            title: '88th Precinct 298 Classon Avenue, Brooklyn, NY 11205<br />',
            'marker-color': '#0000FF',
            'marker-size': 'small',
            'marker-symbol': 'police',
        },
        geometry: {
            type: 'Point',
            coordinates: [-73.960503,40.690099]
        }
    },
     {
        type: 'Feature',
        properties: {
            title: '77th Precinct 127 Utica Avenue, Brooklyn, NY 11213<br />',
            'marker-color': '#0000FF',
            'marker-size': 'small',
            'marker-symbol': 'police',
        },
        geometry: {
            type: 'Point',
            coordinates: [-73.930235,40.674709]
        }
    },
    //start of manhattan precinct
      {
        type: 'Feature',
        properties: {
            title: '9th Precinct 321 East 5th Street<br />',
            'marker-color': '#0000FF',
            'marker-size': 'small',
            'marker-symbol': 'police',
        },
          geometry: {
            type: 'Point',
            coordinates: [ -73.98782,40.7265384]
        }
    },

      {
        type: 'Feature',
        properties: {
            title: 'Police Headquarters 1 Police Plaza, New York, NY, 10038<br />',
            'marker-color': '#0000FF',
            'marker-size': 'small',
            'marker-symbol': 'police',
        },
        geometry: {
            type: 'Point',
            coordinates: [-74.001723,40.712193]
        }
    },
      {
        type: 'Feature',
        properties: {
            title: '34th Precinct 4295 Broadway, New York, NY 10033<br />',
            'marker-color': '#0000FF',
            'marker-size': 'small',
            'marker-symbol': 'police',
        },
        geometry: {
            type: 'Point',
            coordinates: [-73.935407,40.851598]
        }
    },
      {
        type: 'Feature',
        properties: {
            title: '24th Precinct 151 West 100th Street, New York, NY 10025<br />',
            'marker-color': '#0000FF',
            'marker-size': 'small',
            'marker-symbol': 'police',
        },
        geometry: {
            type: 'Point',
            coordinates: [-73.967293,40.796500]
        }
    },
      {
        type: 'Feature',
        properties: {
            title: 'Midtown North Precinct 306 West 54th Street, New York, NY 10019<br />',
            'marker-color': '#0000FF',
            'marker-size': 'small',
            'marker-symbol': 'police',
        },
        geometry: {
            type: 'Point',
            coordinates: [-73.985107,40.764983]
        }
    },
      {
        type: 'Feature',
        properties: {
            title: '6th Precinct 233 West 10th Street, New York, NY, 10014<br />',
            'marker-color': '#0000FF',
            'marker-size': 'small',
            'marker-symbol': 'police',
        },
        geometry: {
            type: 'Point',
            coordinates: [-74.005463,40.733970]
        }
    },
      {
        type: 'Feature',
        properties: {
            title: '20th Precinct 120 West 82nd Street, New York, NY 10024<br />',
            'marker-color': '#0000FF',
            'marker-size': 'small',
            'marker-symbol': 'police',
        },
        geometry: {
            type: 'Point',
            coordinates: [-73.974986,40.784181]
        }
    },
      {
        type: 'Feature',
        properties: {
            title: '17th Precinct 167 East 51st Street, New York, NY 10022<br />',
            'marker-color': '#0000FF',
            'marker-size': 'small',
            'marker-symbol': 'police',
        },
        geometry: {
            type: 'Point',
            coordinates: [-73.970805,40.756769]
        }
    },
    //start of queens precincts
    {
        type: 'Feature',
        properties: {
            title: '1101st Precinct 16-12 Mott Avenue, Far Rockaway, NY 11691<br />',
            'marker-color': '#0000FF',
            'marker-size': 'small',
            'marker-symbol': 'police',
        },
        geometry: {
            type: 'Point',
            coordinates: [-73.749965,40.602921]
        }
    },
    {
        type: 'Feature',
        properties: {
            title: '114th Precinct 34-16 Astoria Boulevard, Queens, NY 11103<br />',
            'marker-color': '#0000FF',
            'marker-size': 'small',
            'marker-symbol': 'police',
        },
        geometry: {
            type: 'Point',
            coordinates: [-73.915328,40.769282]
        }
    },
    {
        type: 'Feature',
        properties: {
            title: '112th Precinct 68-40 Austin Street, Forest Hills, NY 11375<br />',
            'marker-color': '#0000FF',
            'marker-size': 'small',
            'marker-symbol': 'police',
        },
        geometry: {
            type: 'Point',
            coordinates: [-73.851371,40.722360]
        }
    },
    {
        type: 'Feature',
        properties: {
            title: '105th Precinct 92-08 222nd Street, Queens Village, NY 11428<br />',
            'marker-color': '#0000FF',
            'marker-size': 'small',
            'marker-symbol': 'police',
        },
        geometry: {
            type: 'Point',
            coordinates: [-73.735150,40.726156]
        }
    },
    {
        type: 'Feature',
        properties: {
            title: '107th Precinct 71-01 Parsons Boulevard, Flushing, NY 11365<br />',
            'marker-color': '#0000FF',
            'marker-size': 'small',
            'marker-symbol': 'police',
        },
        geometry: {
            type: 'Point',
            coordinates: [-73.810643,40.730138]
        }
    },
    {
        type: 'Feature',
        properties: {
            title: '103rd Precinct 168-02 P.O. Edward Byrne Avenue, Queens, NY 11432<br />',
            'marker-color': '#0000FF',
            'marker-size': 'small',
            'marker-symbol': 'police',
        },
        geometry: {
            type: 'Point',
            coordinates: [-73.791910,40.715452]
        }
    },
    {
        type: 'Feature',
        properties: {
            title: '100th Precinct 92-24 Rockaway Beach Boulevard, Queens, New York 11693<br />',
            'marker-color': '#0000FF',
            'marker-size': 'small',
            'marker-symbol': 'police',
        },
        geometry: {
            type: 'Point',
            coordinates: [-73.816514,40.586292]
        }
    },
    //start of staten island
    {
        type: 'Feature',
        properties: {
            title: '120th Precinct 78 Richmond Terrace, St. George, NY 10301<br />',
            'marker-color': '#0000FF',
            'marker-size': 'small',
            'marker-symbol': 'police',
        },
        geometry: {
            type: 'Point',
            coordinates: [-74.077483,40.644672]
        }
    },
    {
        type: 'Feature',
        properties: {
            title: '121st Precinct 970 Richmond Avenue, Staten Island, NY 10314<br />',
            'marker-color': '#0000FF',
            'marker-size': 'small',
            'marker-symbol': 'police',
        },
        geometry: {
            type: 'Point',
            coordinates: [-74.149199,40.623608]
        }
    },
    {
        type: 'Feature',
        properties: {
            title: '122nd Precinct 2320 Hylan Boulevard, New Dorp, NY 10306<br />',
            'marker-color': '#0000FF',
            'marker-size': 'small',
            'marker-symbol': 'police',
        },
        geometry: {
            type: 'Point',
            coordinates: [-74.105507,40.574151]
        }
    },
     {
        type: 'Feature',
        properties: {
            title: '123rd Precinct 116 Main Street, Tottenville, NY 10307<br />',
            'marker-color': '#0000FF',
            'marker-size': 'small',
            'marker-symbol': 'police',
        },
        geometry: {
            type: 'Point',
            coordinates: [-74.250004,40.511885]
        }
    },

    {
        type: 'Feature',
        properties: {
            title: 'Washington Square Park<br />',
            description: '<br />Flowers, fountains, musicians and lots of beautiful people to watch! ',
             image: "fendi.png",
            'marker-color': '#008000',
            'marker-size': 'small',
            'marker-symbol': 'park2',
        },
        geometry: {
            type: 'Point',
            coordinates: [ -73.997332,40.7308228]
        }
    },
    {
        type: 'Feature',
        properties: {
            title: 'Union Square Park<br />',
            description: '<br />The park is a meeting place, hangout spot, subway hub & home to a bustling greenmarket.',
             image: "fendi.png",
            'marker-color': '#008000',
            'marker-size': 'small',
            'marker-symbol': 'park2',
        },
        geometry: {
            type: 'Point',
            coordinates: [-73.990372,40.735735]
        }
    },
    {
        type: 'Feature',
        properties: {
            title: 'Minetta Playground<br />',
            description: '<br />Small, gated recreation area featuring colorful play structures & swings, plus seasonal sprinklers',
             image: "fendi.png",
            'marker-color': '#A869C8',
            'marker-size': 'small',
            'marker-symbol': 'playground',
        },
        geometry: {
            type: 'Point',
            coordinates: [-73.997332,40.730823]
        }
    },
    {
        type: 'Feature',
        properties: {
            title: 'Vesuvio Playground<br />',
            description: '<br />Storied city park offering basketball courts, play equipment & a wading pool with spray showers. ',
             image: "fendi.png",
            'marker-color': '#A869C8',
            'marker-size': 'small',
            'marker-symbol': 'playground',
        },
        geometry: {
            type: 'Point',
            coordinates: [-73.997332,41.730823]
        }
    },
    {
        type: 'Feature',
        properties: {
            title: 'Evelyns Playground<br />',
            description: '<br />Storied city park offering basketball courts, play equipment & a wading pool with spray showers. ',
             image: "fendi.png",
            'marker-color': '#A869C8',
            'marker-size': 'small',
            'marker-symbol': 'playground',
        },
        geometry: {
            type: 'Point',
            coordinates: [-73.990071,40.736117]
        }
    },


    ]
  };

myLayer.setGeoJSON(geojson); 
L.control.locate().addTo(map);

// Adds all of the points to the map
//map.on('ready', function() {
  //``  map.fitBounds(myLayer.getBounds());





