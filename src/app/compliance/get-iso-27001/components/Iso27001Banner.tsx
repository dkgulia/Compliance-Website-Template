"use client";
import React from "react";
import Image from "next/image";
import { Box, Typography, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import iso27001BannerStyle from "../styles/iso27001BannerStyle";
import { iso27001Data } from "../constants/iso27001Data";

const Iso27001Banner = () => {
  const section = iso27001Data.sections.find((sec) => sec.Sno === "8");
  if (!section) return null;

  const { title, description, buttonText, buttonLink, image } = section.content;

  return (
    <Box sx={iso27001BannerStyle.box}>
      <Box sx={iso27001BannerStyle.container}>
        <Box sx={iso27001BannerStyle.content}>
          <Typography variant="h4" sx={iso27001BannerStyle.heading}>
            {title}
          </Typography>
          <Typography variant="body1" sx={iso27001BannerStyle.description}>
            {description}
          </Typography>
          <Button variant="contained" sx={iso27001BannerStyle.button} href={buttonLink}>
            {buttonText} <ArrowForwardIcon sx={{ ml: 1 }} />
          </Button>
        </Box>

        {image && (
          <Box sx={iso27001BannerStyle.imageWrapper}>
            <Image
              src={image.src}
              alt={image.alt}
              width={300}
              height={230}
              style={{ borderRadius: "8px" }}
            />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Iso27001Banner;
