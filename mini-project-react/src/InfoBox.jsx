import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import './InfoBox.css'
export default function InfoBox({info}){
    const INIT_URL="https://images.unsplash.com/photo-1628525805814-cf9fe2582727?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    const HOT_URL="https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const COLD_URL="https://images.unsplash.com/photo-1615226120487-90ec48f5d316?q=80&w=3873&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL="https://images.unsplash.com/photo-1618557703025-7ec58c83581a?q=80&w=3910&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    return(
    <div className="infoBox">
        <div className="cardContainer">
            <Card sx={{ maxWidth: 345 }}>
        <CardMedia
            sx={{ height: 140 }}
            image={info.humidity>80?RAIN_URL:info.temp>15?HOT_URL:COLD_URL}
            title="green iguana"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {info.city}&nbsp;
            {info.humidity>80?<ThunderstormIcon/>:info.temp>15?<WbSunnyIcon/>:<AcUnitIcon/>}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
            <div>Temperature= {info.temp}&deg;C</div>
            <div>Humidity= {info.humidity}</div>
            <div>Minimum temperature= {info.tempMin}&deg;C</div>
            <div>Maximum temperature= {info.tempMax}&deg;C</div>
            <div>The weather can be Described as <i>{info.weather} </i>feels like {info.feelslike}&deg;C</div>

            </Typography>
        </CardContent>
        </Card>
        </div>
    </div>
    )}