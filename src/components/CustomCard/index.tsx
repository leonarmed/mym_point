import { Paper, Card, CardHeader, CardMedia, CardContent, CardActions, Avatar, Typography } from "@mui/material";

import {
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon
} from "react-share";

interface ICardProps {
    icon: JSX.Element,
    title: string,
    subheader?: string,
    description: string,
    bgColorIcon?: string,
    urlImgService: string
}


export default function RecipeReviewCard({icon, title, subheader, bgColorIcon, description, urlImgService}:ICardProps) {

  const bgColor = bgColorIcon ? bgColorIcon : "#b216c6"
  return (
    <Paper elevation={8} sx={{margin:"20px"}}>
        <Card>
            <CardHeader
                avatar={
                <Avatar sx={{ bgcolor:bgColor }} aria-label="recipe">
                    {icon}
                </Avatar>
                }
                title={title}
                subheader={subheader}
            />
            <CardMedia
                component="img"
                height="250"
                image={urlImgService}
                alt="Libreria"
            />
            <CardContent>
                <Typography variant="subtitle1" color="text.secondary">
                {description}
                </Typography>
            </CardContent>
            <Typography variant="body2" ml={1} fontSize={11} fontWeight={"500"}>Compartir por:</Typography>
            <CardActions disableSpacing>
                <FacebookShareButton
                  url={"https://www.mympoint.com"}
                  windowWidth={100}
                  quote={"M&M Point tiene para ti articulos escolares y de oficina, juguetes, purpurinas, mandalas y servicios de impresión, copiado, escaneo, rotulado y creación de stickers, globos personalizados y mucho más..."}
                  hashtag="#mympoint"
                >
                  <FacebookIcon size={30} round={true}/>
                </FacebookShareButton>
                <WhatsappShareButton
                  url={"https://www.mympoint.com"}
                  windowWidth={100}
                  title={"M&M Point tiene para ti articulos escolares y de oficina, juguetes, purpurinas, mandalas y servicios de impresión, copiado, escaneo, rotulado y creación de stickers, globos personalizados y mucho más..."}
                >
                  <WhatsappIcon size={30} round={true}/>
                </WhatsappShareButton>
            </CardActions>
            
        </Card>
    </Paper>
  );
}
