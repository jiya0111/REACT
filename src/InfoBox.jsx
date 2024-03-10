import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';

import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import Thunderstorm from '@mui/icons-material/Thunderstorm';


export default function InfoBox({info}){
const INIT_URL="https://images.unsplash.com/photo-1545134969-8debd725b007?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";

const HOT_URL="https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
const COLD_URL="https://images.unsplash.com/photo-1524594081293-190a2fe0baae?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
const RAIN_URL="https://plus.unsplash.com/premium_photo-1661378908959-ff6d20adc7fc?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D";


    return( <div className="InfoBox">
        
        
<div className="cardContainer">

        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80 ? RAIN_URL:(info.temp>15)?HOT_URL:COLD_URL}

        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
          {info.humidity>80 
          ?<ThunderstormIcon/>
          :info.temp>15
          ?<WbSunnyIcon/>
            :<AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
        <div>Temprature={info.temp}&deg;C</div>
        <div>Humidity={info.humidity}</div>
        <p>Min Temp={info.tempMin}&deg;C</p>
        <p>Max Temp={info.tempMax}&deg;C</p>
        <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelslike}&deg;C</p>
        </Typography>
      </CardContent>
    
    </Card>
    </div>
        </div>
    )
}