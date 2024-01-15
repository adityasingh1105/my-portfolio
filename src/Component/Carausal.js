import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import { Images } from "../Constant";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export default class Carausal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: "17",
          type: "banner_image",
          attributes: {
            scroll_time: 3,
            priority: 1,
            banner_image_url:
              "https://minio.b307320.dev.eastus.az.svc.builder.cafe/sbucket/utp2879i9xbseb0vbfjf745yuqoh?response-content-disposition=inline%3B%20filename%3D%22azadi1.jpg%22%3B%20filename%2A%3DUTF-8%27%27azadi1.jpg&response-content-type=image%2Fjpeg&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=hello%2F20231215%2Fbuilder-1%2Fs3%2Faws4_request&X-Amz-Date=20231215T083852Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=0f258ab52fc81db6c003ed8d1bfa251535fc692827da45c8c4981e12e8360c35",
          },
        },
        {
          id: "18",
          type: "banner_image",
          attributes: {
            scroll_time: 3,
            priority: 2,
            banner_image_url:
              "https://minio.b307320.dev.eastus.az.svc.builder.cafe/sbucket/5u0njb0qhu7z8ddtw2lhwtstd0wd?response-content-disposition=inline%3B%20filename%3D%22house.jpg%22%3B%20filename%2A%3DUTF-8%27%27house.jpg&response-content-type=image%2Fjpeg&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=hello%2F20231215%2Fbuilder-1%2Fs3%2Faws4_request&X-Amz-Date=20231215T083852Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=0064e8c74db9d317ddbb6fd56c02748598a3229f39acb5149df9bacba69a5140",
          },
        },
        {
          id: "19",
          type: "banner_image",
          attributes: {
            scroll_time: 3,
            priority: 3,
            banner_image_url:
              "https://images.unsplash.com/photo-1702145754106-05d909f08c9d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D",
          },
        },
        {
          id: "21",
          type: "banner_image",
          attributes: {
            scroll_time: 3,
            priority: 4,
            banner_image_url:
              "https://images.unsplash.com/photo-1702550533474-fc112ee77c7f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8",
          },
        },
        {
          id: "24",
          type: "banner_image",
          attributes: {
            scroll_time: 3,
            priority: 5,
            banner_image_url:
              "https://images.unsplash.com/photo-1702353180825-138fbbf17c96?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
        },
      ],
    };
  }
  render() {
    return (
      <div>
        <Carousel
          showArrows={false}
          infiniteLoop={true}
          autoPlay={true}
          showStatus={false}
          showThumbs={false}
          interval={3000}
          className="app-carousel"
        >
          {this.state.data.map((item, index) => (
            <img
              key={index}
              className="carousel-img"
              src={item.attributes.banner_image_url}
              alt={`Slide ${index + 1}`}
            />
          ))}
        </Carousel>
      </div>
    );
  }
}
