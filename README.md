# airquality-js-app
Built an HTML/CSS/JS/Bootstrap based website, I used the Transport for London's(TFL) API provided.
The website is deployed and accessible here https://nagfx.github.io/airquality-js-app/

I was stuck for 2-3 hours trying to figure out where to get the keys, they have not made it easy and after Googling I found how to gain access, afterwards could not find the App ID that gave me another long headache, I tried to search where to get that just to find out it is not needed anymore and the developers do not have the capacity to update that information on main website. Afterwards I still couldn't access the API until I found a way to access without any access key by going 
https://api.tfl.gov.uk/AirQuality/
here for Air Quality API. 

I cannot access the other API for example the https://api.tfl.gov.uk/AccidentStats/2020 or https://api.tfl.gov.uk/AccidentStats/2021 or https://api.tfl.gov.uk/AccidentStats/2022
it gives an error.
https://api.tfl.gov.uk/swagger/ui/index.html?url=/swagger/docs/v1#!/AccidentStats/AccidentStats_Get this link definitely doesn't allow me to access any data.

The website aims to inform the user of the air quality forecasts of current hour (updated hourly by TFL) and tomorrow's, so users can prepare their plan accordingly in London for people who are sensitive to air quality.
