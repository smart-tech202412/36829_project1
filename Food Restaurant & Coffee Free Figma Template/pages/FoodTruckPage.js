// components/FoodTruckPage.js
import Image from 'next/image';
import { useState } from "react";
import Link from 'next/link';


const FoodTruckPage = () => {
  const [selectedSort, setSelectedSort] = useState("default");
  const [selectedFilter, setSelectedFilter] = useState("newest");
  const [isOpen, setIsOpen] = useState(false);

  
    return (
      <div style={{ fontFamily: "Arial, sans-serif" }}>
        {/* Navigation Bar */}
        <nav
          style={{
            backgroundColor: "#000",
            color: "#fff",
            padding: "10px 20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ fontSize: "24px", fontWeight: "bold", color: "#F79C00" }}>Food<span style={{ color: "#fff" }}>tuck</span></div>
          <ul style={{ display: "flex", gap: "20px", listStyle: "none", margin: 0, padding: 0 }}>
            {/* <li style={styles.navItem}>
              Home</li> */}
              <li style={styles.navItem}>
              <Link href="/HeaderFooter">Home</Link>
              </li>
            
            <li style={styles.navItem}>
            <Link href="/">Menu</Link>

              </li>
            <li style={styles.navItem}>
            <Link href="/">Blog</Link>

            </li>
            <li style={styles.navItem}>Pages</li>
            <li style={styles.navItem}>About</li>
            <li style={styles.navItem}>Shop</li>
            <li style={styles.navItem}>
            <Link href="/FormAndButton">Contact</Link>

            </li>
          </ul>
          <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
            <i className="fas fa-search" style={{ cursor: "pointer" }}></i>
            <i className="fas fa-shopping-cart" style={{ cursor: "pointer" }}></i>
          </div>
        </nav>
  
        {/* Hero Section */}
        <section
          style={{
            backgroundImage: "url('./images/hero-image.png')", // Replace with the actual image URL
            backgroundSize: "cover",
            backgroundPosition: "center",
            color: "#fff",
            textAlign: "center",
            padding: "60px 20px",
          }}
        >
          <h1 style={{ fontSize: "36px", marginBottom: "10px" }}>Our Shop</h1>
          <p style={{ fontSize: "18px" }}>
            Home &gt; <span style={{ color: "#F79C00" }}>Shop</span>
          </p>
        </section>
        
        {/* Profile 1*/}
        <section style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "40px 20px" }}>
          <div style={styles.card}>
          <Image
        src="/images/harny.jpeg"
        alt="herny"
        width={800}
        height={500}
        style={{
          width: "100%",
          borderTopLeftRadius: "8px",
          borderTopRightRadius: "8px",
        }}
      />
            <div style={{ padding: "10px", textAlign: "center" }}>
              <h3 style={{ margin: "10px 0" }}>Bulbul Hassan</h3>
              <p style={{ color: "#666" }}>Chef</p>
            </div>
          </div>
        </section>
        <div
      style={{
        display: "flex",
        alignItems: "center",
        fontFamily: "Arial, sans-serif",
        padding: "10px",
        border: "1px solid #D2AFFF",
        borderRadius: "8px",
        maxWidth: "350px",
        margin: "0 auto",
      }}
    >
      {/* Icon Section */}
      <div
        style={{
          backgroundColor: "#D2AFFF",
          padding: "15px",
          borderRadius: "8px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginRight: "15px",
        }}
      >
        <i
          className="fas fa-coffee"
          style={{
            fontSize: "24px",
            color: "white",
          }}
        ></i>
      </div>

      {/* Text Section */}
      <div>
        <h3
          style={{
            margin: "0",
            fontSize: "16px",
            fontWeight: "bold",
            color: "#333",
          }}
        >
          High quality coffee
        </h3>
        <p
          style={{
            margin: "5px 0 0",
            fontSize: "14px",
            color: "#666",
            lineHeight: "1.4",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo augue
          nibh.
        </p>
      </div>
    </div>
          {/* Profile 2*/}
                <section style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "40px 20px" }}>
          <div style={styles.card}>
          <Image
        src="/images/chef.jpeg"
        alt="herny"
        width={800}
        height={500}
        style={{
          width: "100%",
          borderTopLeftRadius: "8px",
          borderTopRightRadius: "8px",
        }}
      />
            <div style={{ padding: "10px", textAlign: "center" }}>
              <h3 style={{ margin: "10px 0" }}>Bulbul Hassan</h3>
              <p style={{ color: "#666" }}>Chef</p>
            </div>
          </div>
        </section>
        <h1 style={{ fontSize: "36px", marginBottom: "10px" }}>Our Shop</h1>
        <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      {/* Email Input Section */}
      <div style={{ display: "flex", width:"300px", alignItems: "center", marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Enter Your Email"
          style={{
            padding: "10px",
            fontSize: "14px",
            border: "1px solid #ccc",
            borderRadius: "4px 0 0 4px",
            flex: 1,
          }}
        />
        <button
          style={{
            backgroundColor: "#F79C00",
            color: "white",
            border: "none",
            padding: "10px 20px",
            fontSize: "16px",
            borderRadius: "0 4px 4px 0",
            cursor: "pointer",
          }}
        >
          <i className="fas fa-paper-plane"></i>
        </button>
      </div>

      {/* Card Section */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          border: "2px solid #D2AFFF",
          borderRadius: "8px",
          padding: "10px",
          width: "200px",
        }}
      >
        {/* Icon */}
        <div style={{ marginRight: "10px" }}>
          <i
            className="fas fa-industry"
            style={{ fontSize: "24px", color: "#333" }}
          ></i>
        </div>
        {/* Text */}
        <div>
          <h4 style={{ margin: "0", fontSize: "16px", color: "#333" }}>
            Quality maintain
          </h4>
        </div>
      </div>
    </div>
                {/* Profile 3*/}
                <section style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "40px 20px" }}>
          <div style={styles.card}>
          <Image
        src="/images/harny.jpeg"
        alt="herny"
        width={800}
        height={500}
        style={{
          width: "100%",
          borderTopLeftRadius: "8px",
          borderTopRightRadius: "8px",
        }}
      />
            <div style={{ padding: "10px", textAlign: "center" }}>
              <h3 style={{ margin: "10px 0" }}>Mark Henry</h3>
              <p style={{ color: "#666" }}>Chef</p>
            </div>
          </div>
        </section>
        {/* Profile 4*/}
        <section style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "40px 20px" }}>
        <div style={styles.card}>
        <Image
      src="/images/grand.jpeg"
      alt="herny"
      width={800}
      height={500}
      style={{
        width: "100%",
        borderTopLeftRadius: "8px",
        borderTopRightRadius: "8px",
      }}
    />
          <div style={{ padding: "10px", textAlign: "center" }}>
            <h3 style={{ margin: "10px 0" }}>Grand Italiano</h3>
            <p style={{ color: "#666" }}>Chef</p>
          </div>
        </div>
      </section>
       {/* Profile 5*/}
       <div
      style={{
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        padding: "20px",
        maxWidth: "400px",
        margin: "0 auto",
      }}
    >
      {/* 24/7 Services Section */}
      <div style={{ marginBottom: "40px" }}>
        <div
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            border: "2px solid #000",
            margin: "0 auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <i
            className="fas fa-clock"
            style={{ fontSize: "24px", color: "#000" }}
          ></i>
        </div>
        <p style={{ marginTop: "10px", fontSize: "16px", color: "#333" }}>
          24/7 services
        </p>
      </div>

      {/* Blog Card */}
      <div
        style={{
          border: "1px solid #ddd",
          borderRadius: "10px",
          overflow: "hidden",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          marginBottom: "40px",
        }}
      >
        {/* Image Section */}
        <div style={{ position: "relative", width: "100%", height: "200px" }}>
          <Image
            src="/images/cake.jpeg" // Replace with the actual path to your image
            alt="Chocolate Truffle Cake"
            layout="fill"
            objectFit="cover"
          />
        </div>

        {/* Content Section */}
        <div style={{ padding: "20px", textAlign: "left" }}>
          {/* Meta Information */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: "14px",
              color: "#F79C00",
              marginBottom: "10px",
            }}
          >
            <span style={{ marginRight: "15px", display: "flex", alignItems: "center" }}>
              <i className="fas fa-calendar-alt" style={{ marginRight: "5px" }}></i>
              02 Jan 2022
            </span>
            <span style={{ display: "flex", alignItems: "center" }}>
              <i className="fas fa-comments" style={{ marginRight: "5px" }}></i>
              Comments (03)
            </span>
          </div>

          {/* Title */}
          <h3 style={{ margin: "0 0 10px 0", fontSize: "18px", color: "#333" }}>
            Chocolate Truffle Cake With Honey Flavor
          </h3>

          {/* Description */}
          <p style={{ margin: "0 0 20px 0", fontSize: "14px", color: "#666" }}>
            Lorem ipsum dolor sit amet, consectetur elit. Non mi sed etiam ad at
            ultrices neque.Tempus,poten diam ac integer id tellus est.
          </p>

          {/* Read More Button */}
          <a
            href="#"
            style={{
              color: "#F79C00",
              fontSize: "14px",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
            }}
          >
            Read more
            <i
              className="fas fa-arrow-right"
              style={{ marginLeft: "5px", fontSize: "12px" }}
            ></i>
          </a>
        </div>
      </div>

      {/* Fresh Food Section */}
      <div>
        <div
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            border: "2px solid #000",
            margin: "0 auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <i
            className="fas fa-hamburger"
            style={{ fontSize: "24px", color: "#000" }}
          ></i>
        </div>
        <p style={{ marginTop: "10px", fontSize: "16px", color: "#333" }}>
          Fresh food
        </p>
      </div>
    </div>
      {/* Profile 6*/}
      <div
      style={{
        fontFamily: "Arial, sans-serif",
        border: "1px solid #ddd",
        borderRadius: "8px",
        maxWidth: "400px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        overflow: "hidden",
      }}
    >
      {/* Image Section */}
      <div style={{ width: "100%", height: "200px", position: "relative" }}>
        <Image
          src="/images/coffee.jpeg" // Replace with the actual path to the coffee image
          alt="Coffee"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Content Section */}
      <div style={{ padding: "20px" }}>
        {/* Header: Date and Author */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            color: "#A68A6C",
            fontSize: "14px",
            marginBottom: "10px",
          }}
        >
          <span style={{ display: "flex", alignItems: "center", marginRight: "15px" }}>
            <i className="fas fa-calendar-alt" style={{ marginRight: "5px" }}></i>
            10 Feb, 2022
          </span>
          <span style={{ display: "flex", alignItems: "center" }}>
            <i className="fas fa-user" style={{ marginRight: "5px" }}></i>
            By Ataur
          </span>
        </div>

        {/* Title */}
        <h3 style={{ margin: "10px 0", fontSize: "18px", color: "#333" }}>
          Simple coffee Recipes for Next Spring !
        </h3>

        {/* Description */}
        <p style={{ fontSize: "14px", color: "#666", lineHeight: "1.6" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Laoreet cursus
          nec duis nec facilisis quis imperdiet venenatis. Platea at nunc consequat
          est dolor.
        </p>

        {/* Read More Button */}
        <div style={{ marginTop: "20px" }}>
          <button
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "white",
              color: "#A68A6C",
              border: "1px solid #A68A6C",
              borderRadius: "4px",
              padding: "10px 15px",
              fontSize: "14px",
              cursor: "pointer",
            }}
          >
            Read More
            <i
              className="fas fa-arrow-right"
              style={{ marginLeft: "10px", fontSize: "12px" }}
            ></i>
          </button>
        </div>
      </div>
    </div>
    {/* Profile 7*/}
    
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px", textAlign: "center" }}>
      {/* Place an Order Button */}
      <button
        style={{
          backgroundColor: "white",
          color: "#F79C00",
          border: "2px solid #F79C00",
          borderRadius: "4px",
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          marginBottom: "40px",
        }}
      >
        Place an order
      </button>

      {/* Cards Section */}
      <div style={{ maxWidth: "400px", margin: "0 auto", textAlign: "left" }}>
        {/* Cappuccino Card */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "30px",
          }}
        >
          {/* Icon */}
          <div
            style={{
              width: "50px",
              height: "50px",
              border: "2px solid #A68A6C",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginRight: "15px",
            }}
          >
            <i
              className="fas fa-coffee"
              style={{
                fontSize: "24px",
                color: "#A68A6C",
              }}
            ></i>
          </div>
          {/* Text */}
          <div>
            <h3 style={{ margin: "0", fontSize: "18px", color: "#333" }}>
              Cappuccino
            </h3>
            <p style={{ margin: "5px 0 0", fontSize: "14px", color: "#666" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo augue
              nibh est nisi.
            </p>
          </div>
        </div>

        {/* Promo and Deal Card */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            border: "2px solid #D2AFFF",
            borderRadius: "8px",
            padding: "15px",
          }}
        >
          {/* Highlighted Icon Section */}
          <div
            style={{
              backgroundColor: "#D2AFFF",
              padding: "10px",
              borderRadius: "8px",
              marginRight: "15px",
            }}
          >
            <i
              className="fas fa-money-bill-wave"
              style={{
                fontSize: "24px",
                color: "white",
              }}
            ></i>
          </div>
          {/* Text */}
          <div>
            <h3 style={{ margin: "0", fontSize: "18px", color: "#333" }}>
              Promo and deal
            </h3>
            <p style={{ margin: "5px 0 0", fontSize: "14px", color: "#666" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo augue
              nibh .
            </p>
          </div>
        </div>
      </div>
    </div> 
    {/* Profile 8*/}
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "20px",
        textAlign: "center",
        maxWidth: "400px",
        margin: "0 auto",
      }}
    >
      {/* Show More Button */}
      <button
        style={{
          backgroundColor: "#F79C00",
          color: "white",
          border: "none",
          borderRadius: "8px",
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          marginBottom: "30px",
        }}
      >
        Show more
      </button>

      {/* Best Chef & Team Card */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          border: "2px solid #D2AFFF",
          borderRadius: "8px",
          padding: "15px",
          marginBottom: "30px",
        }}
      >
        {/* Highlighted Icon Section */}
        <div
          style={{
            backgroundColor: "#D2AFFF",
            padding: "10px",
            borderRadius: "8px",
            marginRight: "15px",
          }}
        >
          <i
            className="fas fa-user-tie"
            style={{
              fontSize: "24px",
              color: "white",
            }}
          ></i>
        </div>
        {/* Text */}
        <div>
          <h3 style={{ margin: "0", fontSize: "18px", color: "#333" }}>
            Best chef & Team
          </h3>
          <p style={{ margin: "5px 0 0", fontSize: "14px", color: "#666" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo augue
            nibh .
          </p>
        </div>
      </div>

      {/* Blog Card */}
      <div
        style={{
          border: "1px solid #ddd",
          borderRadius: "10px",
          overflow: "hidden",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        {/* Image Section */}
        <div style={{ position: "relative", width: "100%", height: "200px" }}>
          <Image
            src="/images/cake.jpeg" // Replace with the actual path to your image
            alt="Chocolate Truffle Cake"
            layout="fill"
            objectFit="cover"
          />
        </div>

        {/* Content Section */}
        <div style={{ padding: "20px", textAlign: "left" }}>
          {/* Meta Information */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: "14px",
              color: "#F79C00",
              marginBottom: "10px",
            }}
          >
            <span
              style={{
                marginRight: "15px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <i
                className="fas fa-calendar-alt"
                style={{ marginRight: "5px" }}
              ></i>
              02 Jan 2022
            </span>
            <span style={{ display: "flex", alignItems: "center" }}>
              <i
                className="fas fa-comments"
                style={{ marginRight: "5px" }}
              ></i>
              Comments (03)
            </span>
          </div>

          {/* Title */}
          <h3 style={{ margin: "0 0 10px 0", fontSize: "18px", color: "#333" }}>
            Chocolate Truffle Cake With Honey Flavor
          </h3>

          {/* Description */}
          <p style={{ margin: "0 0 20px 0", fontSize: "14px", color: "#666" }}>
            Lorem ipsum dolor sit amet, consectetur Varius sed pharetra dictum.
          </p>

          {/* Read More Button */}
          <a
            href="#"
            style={{
              color: "#F79C00",
              fontSize: "14px",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
            }}
          >
            Read more
            <i
              className="fas fa-arrow-right"
              style={{ marginLeft: "5px", fontSize: "12px" }}
            ></i>
          </a>
        </div>
      </div>
    </div>
    {/* Profile 9*/}
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      {/* Order Now and See Menu Buttons */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "40px" }}>
        <button
          style={{
            backgroundColor: "#A68A6C",
            color: "white",
            border: "none",
            borderRadius: "4px",
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Order now
        </button>
        <button
          style={{
            backgroundColor: "white",
            color: "#A68A6C",
            border: "2px solid #A68A6C",
            borderRadius: "4px",
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          See menu
        </button>
      </div>

      {/* Subscribe Section */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px",
          backgroundColor: "#F8F8F8",
          borderRadius: "8px",
          marginBottom: "40px",
        }}
      >
        <div>
          <h2 style={{ margin: "0", fontSize: "24px", color: "#333" }}>
            Subscribe
          </h2>
          <h3 style={{ margin: "5px 0", fontSize: "18px", color: "#333" }}>
            To Our Newsletter
          </h3>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <input
            type="text"
            placeholder="Enter your mail"
            style={{
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "4px 0 0 4px",
              outline: "none",
              fontSize: "14px",
            }}
          />
          <button
            style={{
              backgroundColor: "#A68A6C",
              color: "white",
              border: "none",
              borderRadius: "0 4px 4px 0",
              padding: "10px 20px",
              fontSize: "14px",
              cursor: "pointer",
            }}
          >
            Subscribe now
          </button>
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          {/* Social Media Icons */}
          <div
            style={{
              width: "30px",
              height: "30px",
              backgroundColor: "#A68A6C",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            <i
              className="fab fa-facebook-f"
              style={{ color: "white", fontSize: "14px" }}
            ></i>
          </div>
          <div
            style={{
              width: "30px",
              height: "30px",
              backgroundColor: "#A68A6C",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            <i
              className="fab fa-twitter"
              style={{ color: "white", fontSize: "14px" }}
            ></i>
          </div>
          <div
            style={{
              width: "30px",
              height: "30px",
              backgroundColor: "#A68A6C",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            <i
              className="fab fa-youtube"
              style={{ color: "white", fontSize: "14px" }}
            ></i>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <i
          className="fas fa-coffee"
          style={{ fontSize: "24px", color: "#A68A6C" }}
        ></i>
        <span style={{ fontSize: "16px", color: "#333" }}>Americano</span>
      </div>
    </div>
    {/* Profile 10*/}
    turn (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        border: "1px solid #ddd",
        borderRadius: "10px",
        overflow: "hidden",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        maxWidth: "400px",
        margin: "0 auto",
      }}
    >
      {/* Image Section */}
      <div style={{ position: "relative", width: "100%", height: "250px" }}>
        <Image
          src="/images/pretzels.jpeg" // Replace with your actual image path
          alt="Traditional Soft Pretzels"
          layout="fill"
          objectFit="cover"
          style={{ borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }}
        />
      </div>

      {/* Content Section */}
      <div style={{ padding: "20px", textAlign: "left" }}>
        {/* Meta Information */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: "14px",
            color: "#F79C00",
            marginBottom: "10px",
          }}
        >
          <span style={{ marginRight: "15px", display: "flex", alignItems: "center" }}>
            <i className="fas fa-calendar-alt" style={{ marginRight: "5px" }}></i>
            02 Jan 2022
          </span>
          <span style={{ display: "flex", alignItems: "center" }}>
            <i className="fas fa-comments" style={{ marginRight: "5px" }}></i>
            Comments (03)
          </span>
        </div>

        {/* Title */}
        <h3 style={{ margin: "0 0 10px 0", fontSize: "20px", color: "#333" }}>
          Traditional Soft Pretzels With Sweet Beer Cheese
        </h3>

        {/* Description */}
        <p style={{ margin: "0 0 20px 0", fontSize: "14px", color: "#666" }}>
          Lorem ipsum dolor sit amet, consectetur Varius sed pharetra dictum.
        </p>

        {/* Read More Button */}
        <a
          href="#"
          style={{
            color: "#F79C00",
            fontSize: "14px",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
          }}
        >
          Read more
          <i
            className="fas fa-arrow-right"
            style={{ marginLeft: "5px", fontSize: "12px" }}
          ></i>
        </a>
      </div>
    </div>
    {/* Profile 11*/}
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "20px",
        maxWidth: "600px",
        margin: "20px auto",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        position: "relative",
      }}
    >
      {/* Quotation Mark */}
      <div
        style={{
          position: "absolute",
          top: "10px",
          left: "20px",
          fontSize: "48px",
          color: "#8CC63F",
        }}
      >
        &#8220;
      </div>

      {/* Avatar and Name Section */}
      <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
        <div
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            overflow: "hidden",
            marginRight: "15px",
          }}
        >
          <Image
            src="/images/Chef, London.jpg" // Replace with the actual path to the avatar image
            alt="Md. Arafat Hossion"
            width={60}
            height={60}
            objectFit="cover"
          />
        </div>
        <div>
          <h3 style={{ margin: "0", fontSize: "18px", fontWeight: "bold", color: "#333" }}>
            Md. Arafat Hossion
          </h3>
          <p style={{ margin: "0", fontSize: "14px", color: "#777" }}>Chef, London</p>
        </div>
      </div>

      {/* Rating Section */}
      <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
        <span style={{ fontSize: "16px", fontWeight: "bold", color: "#333", marginRight: "10px" }}>
          5.0
        </span>
        <div>
          <i className="fas fa-star" style={{ color: "#F79C00", marginRight: "3px" }}></i>
          <i className="fas fa-star" style={{ color: "#F79C00", marginRight: "3px" }}></i>
          <i className="fas fa-star" style={{ color: "#F79C00", marginRight: "3px" }}></i>
          <i className="fas fa-star" style={{ color: "#F79C00", marginRight: "3px" }}></i>
          <i className="fas fa-star-half-alt" style={{ color: "#F79C00" }}></i>
        </div>
      </div>

      {/* Testimonial Text */}
      <p style={{ fontSize: "14px", color: "#555", lineHeight: "1.6" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
        pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
        augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed
        vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
      </p>
    </div>
    {/* Profile 12*/}
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "20px",
        borderBottom: "1px solid #ddd",
        maxWidth: "600px",
        margin: "0 auto",
      }}
    >
      {/* Image and Price */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <div
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "8px",
            overflow: "hidden",
          }}
        >
          <Image
            src="/images/salmon.jpeg" // Replace with the actual path to your image
            alt="Alder Grilled Chinook Salmon"
            width={60}
            height={60}
            objectFit="cover"
          />
        </div>
        <span
          style={{
            fontSize: "16px",
            fontWeight: "bold",
            color: "#5DBB63",
          }}
        >
          12.5$
        </span>
      </div>

      {/* Description */}
      <div style={{ flex: 1, marginLeft: "15px" }}>
        <h3 style={{ margin: "0", fontSize: "18px", fontWeight: "bold", color: "#333" }}>
          Alder Grilled Chinook Salmon
        </h3>
        <p style={{ margin: "5px 0", fontSize: "14px", color: "#777" }}>
          Toasted French bread topped with romano, cheddar
        </p>
        <span style={{ fontSize: "12px", color: "#aaa" }}>560 CAL</span>
      </div>

      {/* Price */}
      <div>
        <span
          style={{
            fontSize: "16px",
            fontWeight: "bold",
            color: "#F79C00",
          }}
        >
          32$
        </span>
      </div>
    </div>
    {/* Profile 13*/}
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "20px",
        textAlign: "center",
      }}
    >
      {/* Espresso Section */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
        <i
          className="fas fa-coffee"
          style={{
            fontSize: "24px",
            color: "#A68A6C",
            marginRight: "10px",
          }}
        ></i>
        <span style={{ fontSize: "16px", color: "#333" }}>Espresso</span>
      </div>

      {/* Blog Card */}
      <div
        style={{
          border: "1px solid #ddd",
          borderRadius: "10px",
          overflow: "hidden",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          maxWidth: "400px",
          margin: "0 auto 40px",
        }}
      >
        {/* Image Section */}
        <div style={{ position: "relative", width: "100%", height: "250px" }}>
          <Image
            src="/images/paella.jpeg" // Replace with your actual image path
            alt="Digital Detox Cooking Challenge"
            layout="fill"
            objectFit="cover"
          />
        </div>

        {/* Content Section */}
        <div style={{ padding: "20px", textAlign: "left" }}>
          {/* Meta Information */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: "14px",
              color: "#F79C00",
              marginBottom: "10px",
            }}
          >
            <span
              style={{
                marginRight: "15px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <i
                className="fas fa-calendar-alt"
                style={{ marginRight: "5px" }}
              ></i>
              02 Jan 2022
            </span>
            <span style={{ display: "flex", alignItems: "center" }}>
              <i
                className="fas fa-comments"
                style={{ marginRight: "5px" }}
              ></i>
              Comments (03)
            </span>
          </div>

          {/* Title */}
          <h3 style={{ margin: "0 0 10px 0", fontSize: "18px", color: "#333" }}>
            To Do A Digital Detox Cooking Challenge
          </h3>

          {/* Description */}
          <p style={{ margin: "0 0 20px 0", fontSize: "14px", color: "#666" }}>
            Lorem ipsum dolor sit amet, consectetur Varius sed pharetra dictum.
          </p>

          {/* Read More Button */}
          <a
            href="#"
            style={{
              color: "#F79C00",
              fontSize: "14px",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
            }}
          >
            Read more
            <i
              className="fas fa-arrow-right"
              style={{ marginLeft: "5px", fontSize: "12px" }}
            ></i>
          </a>
        </div>
      </div>

      {/* Arabica Section */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <i
          className="fas fa-mug-hot"
          style={{
            fontSize: "24px",
            color: "#A68A6C",
            marginRight: "10px",
          }}
        ></i>
        <span style={{ fontSize: "16px", color: "#333" }}>Arabica</span>
      </div>
    </div>
     {/* Profile 14*/}
     <div
      style={{
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        padding: "40px 20px",
      }}
    >
      {/* Header */}
      <h3 style={{ fontSize: "16px", color: "#6D8A4D", marginBottom: "5px" }}>
        <i>Partners & Clients</i>
      </h3>
      <h2 style={{ fontSize: "24px", fontWeight: "bold", color: "#333", marginBottom: "40px" }}>
        We work with the best people
      </h2>

      {/* Partner Logos */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "40px",
          flexWrap: "wrap",
          marginBottom: "40px",
        }}
      >
        <Image src="/images/restaurant.png" alt="Restaurant" width={100} height={80} />
        <Image src="/images/bakery.png" alt="Bakery" width={100} height={80} />
        <Image src="/images/fork-spoon.png" alt="Fork & Spoon" width={100} height={80} />
        <Image src="/images/wolf-coffee.png" alt="Wolf Coffee" width={100} height={80} />
        <Image src="/images/bistro.png" alt="Bistro" width={100} height={80} />
        <Image src="/images/bakery2.png" alt="Bakery Sugarcraft" width={100} height={80} />
      </div>

      {/* Coffee Icon and Text */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <i className="fas fa-coffee" style={{ fontSize: "24px", color: "#A68A6C", marginRight: "10px" }}></i>
        <span style={{ fontSize: "16px", color: "#333" }}>Coffee stimy</span>
      </div>
    </div>
     {/* Profile 15*/}
     <div
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "20px",
        maxWidth: "250px",
        margin: "0 auto",
      }}
    >
      {/* Product Card */}
      <div
        style={{
          border: "1px solid #ddd",
          borderRadius: "10px",
          overflow: "hidden",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          marginBottom: "20px",
        }}
      >
        {/* Image Section with Action Icons */}
        <div style={{ position: "relative", width: "100%", height: "150px" }}>
          <Image
            src="/images/coffee-beans.jpeg" // Replace with actual image path
            alt="Coffee Beans"
            layout="fill"
            objectFit="cover"
          />
          <div
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
            }}
          >
            <div
              style={{
                background: "white",
                padding: "5px",
                borderRadius: "4px",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              }}
            >
              <i className="fas fa-shopping-bag"></i>
            </div>
            <div
              style={{
                background: "white",
                padding: "5px",
                borderRadius: "4px",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              }}
            >
              <i className="fas fa-heart"></i>
            </div>
            <div
              style={{
                background: "white",
                padding: "5px",
                borderRadius: "4px",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              }}
            >
              <i className="fas fa-eye"></i>
            </div>
          </div>
        </div>

        {/* Product Info */}
        <div style={{ padding: "15px" }}>
          <h3 style={{ margin: "0", fontSize: "16px", fontWeight: "bold", color: "#333" }}>
            Coffee Beans
          </h3>
          {/* Rating */}
          <div style={{ color: "#F79C00", margin: "5px 0" }}>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star-half-alt"></i>
          </div>
          {/* Price */}
          <p style={{ margin: "0", fontSize: "14px", color: "#777" }}>43.78$</p>
        </div>
      </div>

      {/* Features Section */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        {/* Fast Delivery */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "10px",
            border: "1px solid #ddd",
            borderRadius: "8px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            background: "#fff",
          }}
        >
          <i
            className="fas fa-truck"
            style={{ fontSize: "20px", color: "#28A745", marginRight: "10px" }}
          ></i>
          <span style={{ fontSize: "14px", color: "#333" }}>Fast Delivery</span>
        </div>

        {/* Organic Pack */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "10px",
            border: "1px solid #ddd",
            borderRadius: "8px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            background: "#fff",
          }}
        >
          <i
            className="fas fa-shopping-bag"
            style={{ fontSize: "20px", color: "#A68A6C", marginRight: "10px" }}
          ></i>
          <span style={{ fontSize: "14px", color: "#333" }}>Organic Pack</span>
        </div>

        {/* Fast Delivery Again */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "10px",
            border: "1px solid #ddd",
            borderRadius: "8px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            background: "#fff",
          }}
        >
          <i
            className="fas fa-truck"
            style={{ fontSize: "20px", color: "#28A745", marginRight: "10px" }}
          ></i>
          <span style={{ fontSize: "14px", color: "#333" }}>Fast Delivery</span>
        </div>
      </div>
    </div>
    <div

style={{
  fontFamily: "Arial, sans-serif",
  textAlign: "center",
  padding: "20px",
  maxWidth: "250px",
  margin: "0 auto",
}}
>
{/* Social Media Icons */}
<div
  style={{
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    marginBottom: "20px",
  }}
>
  <i className="fab fa-facebook-f" style={{ fontSize: "18px", color: "#000" }}></i>
  <i className="fab fa-twitter" style={{ fontSize: "18px", color: "#000" }}></i>
  <i className="fab fa-instagram" style={{ fontSize: "18px", color: "#000" }}></i>
  <i className="fab fa-youtube" style={{ fontSize: "18px", color: "#008000" }}></i>
  <i className="fab fa-pinterest" style={{ fontSize: "18px", color: "#000" }}></i>
</div>

{/* Sorting Dropdown */}
<select
  value={selectedSort}
  onChange={(e) => setSelectedSort(e.target.value)}
  style={{
    width: "100%",
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    marginBottom: "15px",
    background: "#f8f8f8",
  }}
>
  <option value="default">Default</option>
  <option value="priceLowHigh">Price: Low to High</option>
  <option value="priceHighLow">Price: High to Low</option>
</select>

{/* Filtering Dropdown */}
<select
  value={selectedFilter}
  onChange={(e) => setSelectedFilter(e.target.value)}
  style={{
    width: "100%",
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    marginBottom: "15px",
    background: "#f8f8f8",
  }}
>
  <option value="newest">Newest</option>
  <option value="oldest">Oldest</option>
</select>

{/* Checkbox Filters */}
<div style={{ textAlign: "left", marginBottom: "15px" }}>
  <label style={{ display: "flex", alignItems: "center", gap: "10px" }}>
    <input type="checkbox" />
    Sandwiches
  </label>
  <label style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "5px" }}>
    <input type="checkbox" />
    {/* Empty checkbox for future category */}
  </label>
</div>

{/* Search Bar */}
<div style={{ display: "flex", alignItems: "center", borderRadius: "5px", overflow: "hidden" }}>
  <input
    type="text"
    placeholder="Search Product"
    style={{
      flex: 1,
      padding: "10px",
      border: "1px solid #ddd",
      borderTopLeftRadius: "5px",
      borderBottomLeftRadius: "5px",
      background: "#FCE8C3",
    }}
  />
  <button
    style={{
      background: "#F79C00",
      color: "white",
      border: "none",
      padding: "10px",
      cursor: "pointer",
      borderTopRightRadius: "5px",
      borderBottomRightRadius: "5px",
    }}
  >
    <i className="fas fa-search"></i>
  </button>
</div>
</div>
     {/* Profile 16*/}
     <div
      style={{
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        padding: "20px",
        maxWidth: "400px",
        margin: "0 auto",
      }}
    >
      {/* Small Food Image */}
      <div style={{ width: "60px", height: "60px", margin: "0 auto 20px" }}>
        <Image
          src="/images/nigates.jpeg" // Replace with actual image path
          alt="Food"
          width={50}
          height={50}
          objectFit="cover"
        />
      </div>

      {/* Chef Profile Card */}
      <div
        style={{
          border: "1px solid #ddd",
          borderRadius: "10px",
          overflow: "hidden",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        {/* Image Section */}
        <div style={{ position: "relative", width: "100%", height: "300px" }}>
          <Image
            src="/images/D chef.jpeg" // Replace with actual image path
            alt="D. Estwood"
            layout="fill"
            objectFit="cover"
          />
        </div>

        {/* Profile Info */}
        <div
          style={{
            position: "absolute",
            bottom: "10px",
            left: "10px",
            background: "white",
            padding: "10px",
            borderRadius: "8px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            textAlign: "left",
          }}
        >
          <h3 style={{ margin: "0", fontSize: "18px", fontWeight: "bold", color: "#333" }}>
            D. Estwood
          </h3>
          <p style={{ margin: "0", fontSize: "14px", color: "#777" }}>Chief Chef</p>
        </div>
      </div>
    </div>
     {/* Profile 17*/}
     <div
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "20px",
        maxWidth: "400px",
        margin: "0 auto",
      }}
    >
      {/* Small Food Image */}
      <div style={{ width: "80px", height: "80px", marginBottom: "20px" }}>
        <Image
          src="/images/nigates.jpeg" // Replace with actual image path
          alt="Dish"
          width={50}
          height={50}
          objectFit="cover"
        />
      </div>

      {/* Food Item */}
      <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
        <div style={{ width: "50px", height: "50px", borderRadius: "5px", overflow: "hidden", marginRight: "10px" }}>
          <Image
            src="/images/pizza.jpeg" // Replace with actual image path
            alt="Pizza"
            width={50}
            height={50}
            objectFit="cover"
          />
        </div>
        <div>
          <h3 style={{ margin: "0", fontSize: "16px", fontWeight: "bold", color: "#333" }}>Pizza</h3>
          {/* Rating */}
          <div style={{ color: "#F79C00", fontSize: "14px", marginBottom: "5px" }}>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star-half-alt"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
          </div>
          {/* Price */}
          <p style={{ margin: "0", fontSize: "14px", color: "#777" }}>$35.00</p>
        </div>
      </div>

      {/* Subscription Bar */}
      <div style={{ display: "flex", alignItems: "center", borderRadius: "5px", overflow: "hidden" }}>
        <input
          type="text"
          placeholder="Enter Your Email"
          style={{
            flex: 1,
            padding: "10px",
            border: "none",
            background: "#0B4D0B",
            color: "white",
            fontSize: "14px",
            borderTopLeftRadius: "5px",
            borderBottomLeftRadius: "5px",
          }}
        />
        <button
          style={{
            background: "white",
            color: "#0B4D0B",
            border: "none",
            padding: "10px 15px",
            fontSize: "14px",
            cursor: "pointer",
            borderTopRightRadius: "5px",
            borderBottomRightRadius: "5px",
          }}
        >
          Subscribe Now
        </button>
      </div>
    </div>
     {/* Profile 18*/}
     <div
      style={{
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        padding: "40px 20px",
        maxWidth: "900px",
        margin: "0 auto",
        position: "relative",
      }}
    >
      {/* Header */}
      <h3 style={{ fontSize: "16px", color: "#6D8A4D", fontStyle: "italic", marginBottom: "5px" }}>
        Testimonials
      </h3>
      <h2 style={{ fontSize: "24px", fontWeight: "bold", color: "#006400", marginBottom: "40px" }}>
        Cu
      </h2>

      {/* Testimonials Container */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          position: "relative",
          gap: "20px",
        }}
      >
        {/* Testimonial 1 */}
        <div
          style={{
            background: "#fff",
            padding: "20px",
            borderRadius: "10px",
            textAlign: "left",
            flex: "1",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            position: "relative",
          }}
        >
          <div style={{ fontSize: "40px", color: "#6D8A4D" }}>&#8220;</div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
            <Image
              src="/images/arafat.jpeg" // Replace with actual avatar image
              alt="Md. Arafat Hossion"
              width={50}
              height={50}
              style={{ borderRadius: "50%" }}
            />
            <div>
              <h3 style={{ margin: "0", fontSize: "16px", fontWeight: "bold", color: "#333" }}>
                Md. Arafat Hossion
              </h3>
              <p style={{ margin: "0", fontSize: "14px", color: "#777" }}>Chef, London</p>
            </div>
          </div>

          {/* Rating */}
          <div style={{ color: "#F79C00", fontSize: "14px", marginBottom: "10px" }}>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star-half-alt"></i>
          </div>

          {/* Testimonial Text */}
          <p style={{ fontSize: "14px", color: "#555", lineHeight: "1.6" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum
            non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum.
          </p>
        </div>

        {/* Testimonial 2 */}
        <div
          style={{
            background: "#fff",
            padding: "20px",
            borderRadius: "10px",
            textAlign: "left",
            flex: "1",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            position: "relative",
          }}
        >
          <div style={{ fontSize: "40px", color: "#6D8A4D" }}>&#8220;</div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
            <Image
              src="/images/mokbul.jpeg" // Replace with actual avatar image
              alt="Md. Mokbul Hossion"
              width={50}
              height={50}
              style={{ borderRadius: "50%" }}
            />
            <div>
              <h3 style={{ margin: "0", fontSize: "16px", fontWeight: "bold", color: "#333" }}>
                Md. Mokbul Hossion
              </h3>
              <p style={{ margin: "0", fontSize: "14px", color: "#777" }}>Chef, London</p>
            </div>
          </div>

          {/* Rating */}
          <div style={{ color: "#F79C00", fontSize: "14px", marginBottom: "10px" }}>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star-half-alt"></i>
          </div>

          {/* Testimonial Text */}
          <p style={{ fontSize: "14px", color: "#555", lineHeight: "1.6" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum
            non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum.
          </p>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          position: "absolute",
          width: "100%",
          top: "50%",
          transform: "translateY(-50%)",
          left: "0",
          right: "0",
        }}
      >
        {/* Left Arrow */}
        <button
          style={{
            background: "#ccc",
            border: "none",
            width: "30px",
            height: "30px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            marginLeft: "-20px",
          }}
        >
          <i className="fas fa-chevron-left"></i>
        </button>

        {/* Right Arrow */}
        <button
          style={{
            background: "#006400",
            color: "white",
            border: "none",
            width: "30px",
            height: "30px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            marginRight: "-20px",
          }}
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
     {/* Profile 19*/}
     <div
      style={{
        fontFamily: "Arial, sans-serif",
        maxWidth: "300px",
        margin: "20px auto",
        border: "1px solid #ddd",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        overflow: "hidden",
      }}
    >
      {/* Image Section */}
      <div style={{ position: "relative", width: "100%", height: "200px" }}>
        <Image
          src="/images/bolognese-pasta.jpeg" // Replace with actual image path
          alt="Bolognese Pasta"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Content Section */}
      <div style={{ padding: "15px", textAlign: "left" }}>
        {/* Product Name */}
        <h3 style={{ margin: "0 0 10px", fontSize: "18px", fontWeight: "bold", color: "#333" }}>
          Bolognese Pasta
        </h3>
        {/* Price */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span style={{ fontSize: "16px", fontWeight: "bold", color: "#F79C00" }}>
            $38.00
          </span>
          <span
            style={{
              fontSize: "14px",
              color: "#aaa",
              textDecoration: "line-through",
            }}
          >
            $45.00
          </span>
        </div>
      </div>
    </div>
     {/* Profile 20*/}
     <div
      style={{
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        padding: "20px",
        backgroundColor: "#fff",
        color: "#333",
      }}
    >
      {/* Subscription Section */}
      <div style={{ marginBottom: "40px" }}>
        <h2 style={{ color: "#006400", fontSize: "24px", marginBottom: "10px" }}>St</h2>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "5px" }}>
          <input
            type="text"
            placeholder="Enter Your Email"
            style={{
              flex: 1,
              padding: "10px",
              border: "1px solid #006400",
              borderRadius: "5px 0 0 5px",
              backgroundColor: "#006400",
              color: "#fff",
              maxWidth: "300px",
            }}
          />
          <button
            style={{
              padding: "10px 20px",
              backgroundColor: "#006400",
              color: "white",
              border: "1px solid #006400",
              borderRadius: "0 5px 5px 0",
              cursor: "pointer",
            }}
          >
            Subscribe Now
          </button>
        </div>
      </div>

      <hr style={{ border: "1px solid #006400", marginBottom: "40px" }} />

      {/* Reload Button */}
      <div style={{ marginBottom: "40px" }}>
        <button
          style={{
            backgroundColor: "#006400",
            color: "#fff",
            border: "none",
            padding: "15px",
            borderRadius: "50%",
            cursor: "pointer",
          }}
        >
          <i className="fas fa-sync-alt" style={{ fontSize: "20px" }}></i>
        </button>
      </div>

      {/* Small Food Images */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          alignItems: "flex-end",
          marginBottom: "40px",
        }}
      >
        <Image src="/images/food1.jpeg" alt="Food 1" width={80} height={80} />
        <Image src="/images/food2.jpeg" alt="Food 2" width={80} height={80} />
        <Image src="/images/food3.jpeg" alt="Food 3" width={80} height={80} />
      </div>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: "#006400",
          padding: "20px",
          color: "white",
          position: "relative",
        }}
      >
        <div style={{ marginBottom: "20px" }}>
          Copyright © 2022 by Ayman. All Rights Reserved.
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "15px",
          }}
        >
          <i className="fab fa-facebook-f" style={{ fontSize: "20px" }}></i>
          <i className="fab fa-twitter" style={{ fontSize: "20px" }}></i>
          <i className="fab fa-instagram" style={{ fontSize: "20px" }}></i>
          <i className="fab fa-youtube" style={{ fontSize: "20px" }}></i>
          <i className="fab fa-pinterest" style={{ fontSize: "20px" }}></i>
        </div>
      </footer>
    </div>
     {/* Profile 21*/}
     <div
      style={{
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        padding: "20px",
        maxWidth: "400px",
        margin: "0 auto",
      }}
    >
      {/* Image Section */}
      <div style={{ position: "relative", width: "100%", height: "300px" }}>
        <Image
          src="/images/burger.jpeg" // Replace with the actual image path
          alt="Burger"
          layout="fill"
          objectFit="cover"
          style={{
            borderRadius: "10px",
          }}
        />
      </div>

      {/* Date Section */}
      <p
        style={{
          marginTop: "20px",
          fontSize: "16px",
          color: "#006400",
          fontWeight: "bold",
        }}
      >
        10 February 2022
      </p>
    </div>
     {/* Profile 22*/}
     <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#111",
        color: "#fff",
        padding: "40px 20px",
      }}
    >
      {/* Support Message Section */}
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "10px" }}>
          <span style={{ color: "#F79C00" }}>Still</span> You Need Our Support?
        </h2>
        <p style={{ fontSize: "14px", marginBottom: "20px" }}>
          Don’t wait make a smart & logical quote here. It’s pretty easy.
        </p>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <input
            type="text"
            placeholder="Enter Your Email"
            style={{
              padding: "10px",
              flex: "1",
              maxWidth: "300px",
              borderRadius: "5px 0 0 5px",
              border: "1px solid #F79C00",
              outline: "none",
              backgroundColor: "#333",
              color: "#fff",
            }}
          />
          <button
            style={{
              padding: "10px 20px",
              backgroundColor: "#F79C00",
              color: "white",
              border: "none",
              borderRadius: "0 5px 5px 0",
              cursor: "pointer",
            }}
          >
            Subscribe Now
          </button>
        </div>
      </div>

      <hr style={{ border: "1px solid #444", marginBottom: "40px" }} />

      {/* Footer Sections */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {/* About Us */}
        <div style={{ flex: "1", minWidth: "200px" }}>
          <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>About Us.</h3>
          <p style={{ fontSize: "14px", marginBottom: "20px", lineHeight: "1.6" }}>
            Corporate clients and leisure travelers have been relying on Groundlink for dependable,
            safe, and professional chauffeured car service in major cities across the World.
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#333",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            <i
              className="fas fa-sync-alt"
              style={{
                fontSize: "20px",
                color: "#F79C00",
                marginRight: "10px",
              }}
            ></i>
            <div>
              <h4 style={{ margin: "0", fontSize: "14px" }}>Opening Hours</h4>
              <p style={{ margin: "0", fontSize: "12px", color: "#aaa" }}>
                Mon - Sat (8:00 - 6:00) <br /> Sunday - Closed
              </p>
            </div>
          </div>
        </div>

        {/* Useful Links */}
        <div style={{ flex: "1", minWidth: "150px" }}>
          <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>Useful Links</h3>
          <ul style={{ listStyle: "none", padding: "0", fontSize: "14px", lineHeight: "1.8" }}>
            <li>About</li>
            <li>News</li>
            <li>Partners</li>
            <li>Team</li>
            <li>Menu</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Help Section */}
        <div style={{ flex: "1", minWidth: "150px" }}>
          <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>Help?</h3>
          <ul style={{ listStyle: "none", padding: "0", fontSize: "14px", lineHeight: "1.8" }}>
            <li>FAQ</li>
            <li>Terms & Conditions</li>
            <li>Reporting</li>
            <li>Documentation</li>
            <li>Support Policy</li>
            <li>Privacy</li>
          </ul>
        </div>

        {/* Recent Posts */}
        <div style={{ flex: "1", minWidth: "250px" }}>
          <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>Recent Post</h3>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
            <Image
              src="/images/food1.jpeg" // Replace with actual image path
              alt="Post 1"
              width={50}
              height={50}
            />
            <div>
              <p style={{ margin: "0", fontSize: "14px", color: "#fff" }}>
                Is fast food good for your body?
              </p>
              <p style={{ margin: "0", fontSize: "12px", color: "#aaa" }}>February 28, 2022</p>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
            <Image
              src="/images/food2.jpeg" // Replace with actual image path
              alt="Post 2"
              width={50}
              height={50}
            />
            <div>
              <p style={{ margin: "0", fontSize: "14px", color: "#fff" }}>
                Is fast food good for your body?
              </p>
              <p style={{ margin: "0", fontSize: "12px", color: "#aaa" }}>February 28, 2022</p>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
            <Image
              src="/images/food3.jpeg" // Replace with actual image path
              alt="Post 2"
              width={50}
              height={50}
            />
            <div>
              <p style={{ margin: "0", fontSize: "14px", color: "#fff" }}>
                Change your food habits with organic food.
              </p>
              <p style={{ margin: "0", fontSize: "12px", color: "#aaa" }}>February 28, 2022</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div
        style={{
          backgroundColor: "#222",
          padding: "20px",
          marginTop: "40px",
          textAlign: "center",
          color: "#aaa",
        }}
      >
        <p style={{ margin: "0", fontSize: "14px" }}>Copyright © 2022 by Ayman. All Rights Reserved.</p>
        <div style={{ marginTop: "10px", display: "flex", justifyContent: "center", gap: "15px" }}>
          <i className="fab fa-facebook-f" style={{ fontSize: "20px", color: "#fff" }}></i>
          <i className="fab fa-twitter" style={{ fontSize: "20px", color: "#fff" }}></i>
          <i className="fab fa-instagram" style={{ fontSize: "20px", color: "#fff" }}></i>
          <i className="fab fa-youtube" style={{ fontSize: "20px", color: "#fff" }}></i>
          <i className="fab fa-pinterest" style={{ fontSize: "20px", color: "#fff" }}></i>
        </div>
      </div>
    </div>
     {/* Profile 23*/}

     <div style={{ fontFamily: "Arial, sans-serif", padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      {/* Popular Tags */}
      <h3 style={{ fontSize: "18px", marginBottom: "20px" }}>Popular Tags</h3>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          marginBottom: "40px",
        }}
      >
        {[
          "Sandwich",
          "Tikka",
          "Bbq",
          "Restaurant",
          "Chicken Sharma",
          "Health",
          "Fastfood",
          "Food",
          "Pizza",
          "Burger",
          "Chicken",
        ].map((tag) => (
          <span
            key={tag}
            style={{
              padding: "5px 10px",
              border: "1px solid #ddd",
              borderRadius: "20px",
              fontSize: "14px",
              color: "#333",
              cursor: "pointer",
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Chicken Fry Card */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "15px",
          marginBottom: "40px",
        }}
      >
        <Image
          src="/images/chicken-fry.jpeg" // Replace with actual image path
          alt="Chicken Fry"
          width={80}
          height={80}
          style={{ borderRadius: "5px" }}
        />
        <div>
          <h3 style={{ margin: "0", fontSize: "16px", color: "#333" }}>Chicken Fry</h3>
          <p style={{ margin: "0", fontSize: "14px", color: "#666" }}>26</p>
        </div>
      </div>

      {/* Comment Section */}
      <div style={{ display: "flex", gap: "15px" }}>
        <Image
          src="/images/md-moon-khan.jpeg" // Replace with actual image path
          alt="MD Moon Khan"
          width={50}
          height={50}
          style={{ borderRadius: "50%" }}
        />
        <div>
          <h4 style={{ margin: "0", fontSize: "16px", color: "#333" }}>
            MD Moon Khan{" "}
            <span
              style={{
                color: "#F79C00",
                fontSize: "14px",
                cursor: "pointer",
                fontWeight: "normal",
              }}
            >
              Reply
            </span>
          </h4>
          <p style={{ margin: "0", fontSize: "14px", color: "#aaa", marginTop: "5px" }}>
            <i className="far fa-calendar-alt" style={{ marginRight: "5px" }}></i>
            June 22, 2020
          </p>
          <p style={{ fontSize: "14px", color: "#666", lineHeight: "1.6", marginTop: "10px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc orci tellus, fermentum nec
            imperdiet sed, pulvinar et sem. Fusce hendrerit faucibus sollicitudin.
          </p>
        </div>
      </div>
    </div>
     {/* Profile 24*/}
     <div style={{ fontFamily: "Arial, sans-serif", padding: "20px", maxWidth: "400px", margin: "0 auto" }}>
      {/* Pizza Image */}
      <div style={{ marginBottom: "20px" }}>
        <Image
          src="/images/pizza.jpeg" // Replace with actual image path
          alt="Pizza"
          width={80}
          height={80}
          objectFit="cover"
          style={{ borderRadius: "10px" }}
        />
      </div>

      {/* Burger Card */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          border: "1px solid #ddd",
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <Image
          src="/images/burger.jpeg" // Replace with actual image path
          alt="Burger"
          width={80}
          height={80}
          objectFit="cover"
          style={{ borderRadius: "10px" }}
        />
        <div>
          <p style={{ margin: "0", fontSize: "14px", color: "#777" }}>June 22, 2020</p>
          <p style={{ margin: "5px 0 0", fontSize: "14px", color: "#333" }}>
            Lorem ipsum dolor sit cing elit, sed do.
          </p>
        </div>
      </div>
    </div>
     {/* Profile 25*/}
     <div style={{ fontFamily: "Arial, sans-serif", padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      {/* Follow Us Section */}
      <div style={{ marginBottom: "40px" }}>
        <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>Follow Us</h3>
        <div style={{ display: "flex", gap: "15px" }}>
          <i
            className="fab fa-twitter"
            style={{
              fontSize: "24px",
              color: "#333",
              cursor: "pointer",
              backgroundColor: "#f5f5f5",
              padding: "10px",
              borderRadius: "50%",
            }}
          ></i>
          <i
            className="fab fa-youtube"
            style={{
              fontSize: "24px",
              color: "#333",
              cursor: "pointer",
              backgroundColor: "#f5f5f5",
              padding: "10px",
              borderRadius: "50%",
            }}
          ></i>
          <i
            className="fab fa-pinterest"
            style={{
              fontSize: "24px",
              color: "#fff",
              cursor: "pointer",
              backgroundColor: "#F79C00",
              padding: "10px",
              borderRadius: "50%",
            }}
          ></i>
          <i
            className="fab fa-instagram"
            style={{
              fontSize: "24px",
              color: "#333",
              cursor: "pointer",
              backgroundColor: "#f5f5f5",
              padding: "10px",
              borderRadius: "50%",
            }}
          ></i>
          <i
            className="fab fa-facebook-f"
            style={{
              fontSize: "24px",
              color: "#333",
              cursor: "pointer",
              backgroundColor: "#f5f5f5",
              padding: "10px",
              borderRadius: "50%",
            }}
          ></i>
        </div>
      </div>

      {/* Comment Section */}
      <div
        style={{
          border: "1px solid #ddd",
          borderRadius: "10px",
          padding: "15px",
          display: "flex",
          gap: "15px",
          backgroundColor: "#f9f9f9",
        }}
      >
        {/* Avatar */}
        <div>
          <Image
            src="/images/avatar-placeholder.jpg" // Replace with actual image path
            alt="MD Sojib Khan"
            width={50}
            height={50}
            style={{ borderRadius: "50%" }}
          />
        </div>
        {/* Comment Content */}
        <div>
          <h4 style={{ margin: "0", fontSize: "16px", color: "#333" }}>
            MD Sojib Khan{" "}
            <span
              style={{
                fontSize: "14px",
                color: "#F79C00",
                cursor: "pointer",
              }}
            >
              Reply
            </span>
          </h4>
          <p style={{ margin: "5px 0 10px", fontSize: "14px", color: "#777" }}>
            <i className="far fa-calendar-alt" style={{ marginRight: "5px" }}></i>
            June 22, 2020
          </p>
          <p style={{ fontSize: "14px", color: "#555", lineHeight: "1.6" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc orci tellus, fermentum nec
            imperdiet sed, pulvinar et sem. Fusce hendrerit faucibus sollicitudin.
          </p>
        </div>
      </div>
    </div>
     {/* Profile 26*/}
     <div
      style={{
        fontFamily: "Arial, sans-serif",
        maxWidth: "600px",
        margin: "20px auto",
        border: "1px solid #ddd",
        borderRadius: "10px",
        overflow: "hidden",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Image Section */}
      <div style={{ position: "relative" }}>
        <Image
          src="/images/tacos.jpeg" // Replace with the actual image path
          alt="Tacos"
          width={600}
          height={350}
          objectFit="cover"
        />
        {/* Date Tag */}
        <div
          style={{
            position: "absolute",
            top: "10px",
            left: "10px",
            backgroundColor: "#F79C00",
            color: "#fff",
            padding: "5px 10px",
            borderRadius: "5px",
            fontSize: "14px",
            fontWeight: "bold",
          }}
        >
          14 Feb
        </div>
      </div>

      {/* Content Section */}
      <div style={{ padding: "20px" }}>
        {/* Meta Information */}
        <div style={{ display: "flex", alignItems: "center", marginBottom: "10px", fontSize: "14px", color: "#777" }}>
          <span style={{ marginRight: "10px" }}>
            <i className="far fa-calendar-alt" style={{ marginRight: "5px" }}></i>
            Feb 14, 2022
          </span>
          <span style={{ marginRight: "10px" }}>
            <i className="far fa-comment" style={{ marginRight: "5px" }}></i>3
          </span>
          <span>
            <i className="far fa-user" style={{ marginRight: "5px" }}></i>Admin
          </span>
        </div>

        {/* Title */}
        <h3 style={{ margin: "0 0 10px", fontSize: "20px", color: "#333", fontWeight: "bold" }}>
          10 Reasons To Do A Digital Detox Challenge
        </h3>

        {/* Description */}
        <p style={{ fontSize: "14px", color: "#555", lineHeight: "1.6" }}>
          At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
          Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod
          tempor invidunt ut labore et dolore magna aliquyam erat.
        </p>

        {/* Read More Button */}
        <div style={{ marginTop: "20px" }}>
          <button
            style={{
              backgroundColor: "transparent",
              color: "#F79C00",
              border: "1px solid #F79C00",
              padding: "10px 20px",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "14px",
              fontWeight: "bold",
            }}
          >
            Read More <i className="fas fa-arrow-right" style={{ marginLeft: "5px" }}></i>
          </button>
        </div>
      </div>
    </div>
     {/* Profile 27*/}
     <div style={{ fontFamily: "Arial, sans-serif", padding: "20px", maxWidth: "400px", margin: "0 auto" }}>
     {/* Search Bar */}
     <div style={{ display: "flex", marginBottom: "20px" }}>
       <input
         type="text"
         placeholder="Search Your Keyword..."
         style={{
           flex: "1",
           padding: "10px",
           border: "1px solid #ccc",
           borderRadius: "5px 0 0 5px",
           outline: "none",
         }}
       />
       <button
         style={{
           backgroundColor: "#F79C00",
           color: "#fff",
           border: "none",
           padding: "10px 20px",
           borderRadius: "0 5px 5px 0",
           cursor: "pointer",
         }}
       >
         <i className="fas fa-search"></i>
       </button>
     </div>

     {/* Profile Card */}
     <div
       style={{
         border: "1px solid #ddd",
         borderRadius: "10px",
         padding: "20px",
         textAlign: "center",
         backgroundColor: "#fff",
         boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
       }}
     >
       {/* Avatar */}
       <Image
         src="/images/avatar.jpeg" // Replace with the actual image path
         alt="Prince Miyako"
         width={80}
         height={80}
         style={{ borderRadius: "75%" }}
       />

       {/* Name and Title */}
       <h3 style={{ margin: "10px 0 5px", fontSize: "18px", color: "#333" }}>Prince Miyako</h3>
       <p style={{ margin: "0 0 10px", fontSize: "14px", color: "#777" }}>Blogger/Photographer</p>

       {/* Rating */}
       <div style={{ marginBottom: "10px" }}>
         <i className="fas fa-star" style={{ color: "#F79C00", marginRight: "5px" }}></i>
         <i className="fas fa-star" style={{ color: "#F79C00", marginRight: "5px" }}></i>
         <i className="fas fa-star" style={{ color: "#F79C00", marginRight: "5px" }}></i>
         <i className="fas fa-star" style={{ color: "#F79C00", marginRight: "5px" }}></i>
         <i className="far fa-star" style={{ color: "#ccc", marginRight: "5px" }}></i>
         <span style={{ fontSize: "14px", color: "#777" }}>(1 Review)</span>
       </div>

       {/* Description */}
       <p style={{ fontSize: "14px", color: "#555", lineHeight: "1.6" }}>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Veritatis distinctio, odio eligendi suscipit
         reprehenderit atque.
       </p>

       {/* Social Media Icons */}
       <div style={{ marginTop: "15px", display: "flex", justifyContent: "center", gap: "15px" }}>
         <i className="fab fa-facebook-f" style={{ fontSize: "20px", color: "#333", cursor: "pointer" }}></i>
         <i className="fab fa-twitter" style={{ fontSize: "20px", color: "#333", cursor: "pointer" }}></i>
         <i className="fab fa-instagram" style={{ fontSize: "20px", color: "#333", cursor: "pointer" }}></i>
         <i className="fab fa-pinterest" style={{ fontSize: "20px", color: "#333", cursor: "pointer" }}></i>
       </div>
     </div>
   </div>
    {/* Profile 28*/}
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      {/* Item Row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px 0",
          borderBottom: "1px solid #ddd",
        }}
      >
        {/* Image and Name */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Image
            src="/images/burger.jpeg" // Replace with actual image path
            alt="Burger"
            width={80}
            height={80}
            objectFit="cover"
            style={{ borderRadius: "5px" }}
          />
          <div>
            <h3 style={{ margin: "0", fontSize: "16px", color: "#333" }}>Burger</h3>
            <div style={{ marginTop: "5px" }}>
              <i className="fas fa-star" style={{ color: "#F79C00", marginRight: "3px" }}></i>
              <i className="fas fa-star" style={{ color: "#F79C00", marginRight: "3px" }}></i>
              <i className="fas fa-star" style={{ color: "#F79C00", marginRight: "3px" }}></i>
              <i className="far fa-star" style={{ color: "#ccc", marginRight: "3px" }}></i>
              <i className="far fa-star" style={{ color: "#ccc", marginRight: "3px" }}></i>
            </div>
          </div>
        </div>

        {/* Price */}
        <div style={{ fontSize: "16px", color: "#333" }}>$35.00</div>

        {/* Quantity Controls */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <button
            style={{
              padding: "5px 10px",
              border: "1px solid #ddd",
              borderRadius: "5px",
              cursor: "pointer",
              backgroundColor: "#f5f5f5",
            }}
          >
            -
          </button>
          <span style={{ fontSize: "16px", color: "#333" }}>1</span>
          <button
            style={{
              padding: "5px 10px",
              border: "1px solid #ddd",
              borderRadius: "5px",
              cursor: "pointer",
              backgroundColor: "#f5f5f5",
            }}
          >
            +
          </button>
        </div>

        {/* Total */}
        <div style={{ fontSize: "16px", color: "#333" }}>$32.00</div>

        {/* Delete Icon */}
        <div>
          <i
            className="fas fa-times"
            style={{
              fontSize: "16px",
              color: "#ff0000",
              cursor: "pointer",
            }}
          ></i>
        </div>
      </div>

      {/* Tags and Share Section */}
      <div style={{ marginTop: "20px", display: "flex", justifyContent: "space-between" }}>
        {/* Tags */}
        <div>
          <strong style={{ fontSize: "14px", color: "#333" }}>Tags:</strong>{" "}
          <span style={{ fontSize: "14px", color: "#777" }}>Restaurant, Dinner, Pizza, Yummy</span>
        </div>

        {/* Social Share Icons */}
        <div style={{ display: "flex", gap: "10px" }}>
          <i className="fab fa-facebook-f" style={{ fontSize: "16px", color: "#333", cursor: "pointer" }}></i>
          <i className="fab fa-twitter" style={{ fontSize: "16px", color: "#333", cursor: "pointer" }}></i>
          <i className="fab fa-instagram" style={{ fontSize: "16px", color: "#333", cursor: "pointer" }}></i>
          <i className="fab fa-pinterest" style={{ fontSize: "16px", color: "#333", cursor: "pointer" }}></i>
        </div>
      </div>
    </div>
     {/* Profile 29*/}
     <div
      style={{
        fontFamily: "Arial, sans-serif",
        maxWidth: "800px",
        margin: "20px auto",
        border: "1px solid #ddd",
        borderRadius: "10px",
        overflow: "hidden",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Image Section */}
      <div>
        <Image
          src="/images/chicken-fingers.jpeg" // Replace with actual image path
          alt="Chicken Fingers"
          width={800}
          height={450}
          objectFit="cover"
        />
      </div>

      {/* Content Section */}
      <div style={{ padding: "20px" }}>
        {/* Meta Information */}
        <div style={{ display: "flex", alignItems: "center", marginBottom: "10px", fontSize: "14px", color: "#777" }}>
          <span style={{ marginRight: "10px" }}>
            <i className="far fa-calendar-alt" style={{ marginRight: "5px" }}></i>
            Feb 14, 2022
          </span>
          <span style={{ marginRight: "10px" }}>
            <i className="far fa-comment" style={{ marginRight: "5px" }}></i>3
          </span>
          <span>
            <i className="far fa-user" style={{ marginRight: "5px" }}></i>Admin
          </span>
        </div>

        {/* Title */}
        <h3 style={{ margin: "0 0 10px", fontSize: "20px", color: "#333", fontWeight: "bold" }}>
          10 Reasons To Do A Digital Detox Challenge
        </h3>

        {/* Description */}
        <p style={{ fontSize: "14px", color: "#555", lineHeight: "1.6" }}>
          Netus pretium tellus nulla commodo massa adipiscing in elementum magna congue condimentum placerat habitasse
          potenti orci a quisque tristique elementum et viverra et condimentum scelerisque eu mi. Etiam praesent cras
          vehicula a ullamcorper nulla scelerisque augue tempus faucibus quam ac ut nibh a condimentum suspendisse hac
          integer leo erat aliquam ut himenaeos.
        </p>
        <p style={{ fontSize: "14px", color: "#555", lineHeight: "1.6" }}>
          Ac hac ullamcorper donec ante habitasse donec imperdiet turpis varius per a augue magna hac. Nec hac et
          vestibulum dui a tincidunt per a aptent interdum purus feugiat id at aliquet erat himenaeos nunc torquent
          euismod adipiscing adipiscing dui gravida justo.
        </p>
      </div>
    </div>
      {/* Profile 30*/}
      <div style={{ fontFamily: "Arial, sans-serif", padding: "20px", maxWidth: "400px", margin: "0 auto" }}>
      {/* Chicken Tikka Kabab Section */}
      <div style={{ display: "flex", gap: "15px", alignItems: "center", marginBottom: "20px" }}>
        <Image
          src="/images/chicken-tikka.jpeg" // Replace with actual image path
          alt="Chicken Tikka Kabab"
          width={80}
          height={80}
          objectFit="cover"
          style={{ borderRadius: "5px" }}
        />
        <div>
          <h3 style={{ margin: "0", fontSize: "16px", color: "#333" }}>Chicken Tikka Kabab</h3>
          <p style={{ margin: "5px 0 0", fontSize: "14px", color: "#666" }}>150 gm net</p>
          <p style={{ margin: "5px 0 0", fontSize: "14px", color: "#333", fontWeight: "bold" }}>50$</p>
        </div>
      </div>

      <hr style={{ border: "1px solid #ddd", margin: "20px 0" }} />

      {/* Fresh Lime Section */}
      <div style={{ marginBottom: "20px", textAlign: "center" }}>
        <Image
          src="/images/fresh-lime.jpeg" // Replace with actual image path
          alt="Fresh Lime"
          width={300}
          height={200}
          objectFit="cover"
          style={{ borderRadius: "10px" }}
        />
        <div style={{ marginTop: "10px" }}>
          <h3 style={{ margin: "0", fontSize: "16px", color: "#333" }}>Fresh Lime</h3>
          <p style={{ margin: "5px 0", fontSize: "14px", color: "#F79C00", fontWeight: "bold" }}>
            $38.00 <span style={{ textDecoration: "line-through", color: "#777", fontWeight: "normal" }}>$45.00</span>
          </p>
        </div>
      </div>

      {/* Search Input */}
      <div>
        <div style={{ display: "flex", alignItems: "center", border: "1px solid #ddd", borderRadius: "5px", padding: "5px" }}>
          <i
            className="fas fa-search"
            style={{ fontSize: "16px", color: "#777", marginRight: "10px" }}
          ></i>
          <input
            type="text"
            placeholder="Name"
            style={{
              border: "none",
              outline: "none",
              fontSize: "14px",
              flex: 1,
            }}
          />
        </div>
      </div>
    </div>
      {/* Profile 31*/}
      <div
      style={{
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        maxWidth: "800px",
        margin: "40px auto",
        padding: "20px",
      }}
    >
      {/* Section Header */}
      <h3 style={{ color: "#F79C00", fontSize: "18px", marginBottom: "10px" }}>Testimonials</h3>
      <h1 style={{ fontSize: "24px", color: "#333", marginBottom: "20px" }}>What our client are saying</h1>

      {/* Testimonial Card */}
      <div
        style={{
          position: "relative",
          backgroundColor: "#fff",
          border: "1px solid #ddd",
          borderRadius: "10px",
          padding: "20px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          overflow: "hidden",
        }}
      >
        {/* Background Decoration */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            opacity: 0.1,
            zIndex: -1,
          }}
        >
          <Image
            src="/images/background-flower.png" // Replace with your actual background image
            alt="Background Decoration"
            width={500}
            height={500}
          />
        </div>

        {/* Profile Image */}
        <div
          style={{
            position: "absolute",
            top: "-px",
            left: "50%",
            transform: "translateX(-50%)",
            borderRadius: "50%",
            overflow: "hidden",
            border: "5px solid #fff",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        >
          <Image
            src="/images/client-profile.jpeg" // Replace with your actual profile image
            alt="Client"
            width={80}
            height={80}
          />
        </div>

        {/* Quotation Mark */}
        <div style={{ fontSize: "32px", color: "#F79C00", marginTop: "40px", marginBottom: "20px" }}>
          &#x201C;
        </div>

        {/* Testimonial Text */}
        <p style={{ fontSize: "14px", color: "#555", lineHeight: "1.6", marginBottom: "20px" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat
          fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae
          mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
        </p>

        {/* Client Info */}
        <h4 style={{ fontSize: "16px", color: "#333", marginBottom: "5px" }}>Alamin Hasan</h4>
        <p style={{ fontSize: "14px", color: "#777", marginBottom: "10px" }}>Food Specialist</p>

        {/* Star Rating */}
        <div>
          <i className="fas fa-star" style={{ color: "#F79C00", marginRight: "5px" }}></i>
          <i className="fas fa-star" style={{ color: "#F79C00", marginRight: "5px" }}></i>
          <i className="fas fa-star" style={{ color: "#F79C00", marginRight: "5px" }}></i>
          <i className="fas fa-star" style={{ color: "#F79C00", marginRight: "5px" }}></i>
          <i className="far fa-star" style={{ color: "#ccc", marginRight: "5px" }}></i>
        </div>
      </div>

      {/* Pagination */}
      <div style={{ marginTop: "20px" }}>
        <div
          style={{
            display: "inline-block",
            width: "10px",
            height: "10px",
            backgroundColor: "#F79C00",
            borderRadius: "50%",
            margin: "0 5px",
            cursor: "pointer",
          }}
        ></div>
        <div
          style={{
            display: "inline-block",
            width: "10px",
            height: "10px",
            backgroundColor: "#ccc",
            borderRadius: "50%",
            margin: "0 5px",
            cursor: "pointer",
          }}
        ></div>
        <div
          style={{
            display: "inline-block",
            width: "10px",
            height: "10px",
            backgroundColor: "#ccc",
            borderRadius: "50%",
            margin: "0 5px",
            cursor: "pointer",
          }}
        ></div>
      </div>
    </div>
      {/* Profile 32*/}
      <div style={{ fontFamily: "Arial, sans-serif", maxWidth: "400px", margin: "40px auto", padding: "20px" }}>
      {/* Email Input */}
      <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
        <i
          className="far fa-envelope"
          style={{ fontSize: "16px", color: "#777", marginRight: "10px" }}
        ></i>
        <input
          type="email"
          placeholder="Email"
          style={{
            flex: 1,
            padding: "10px",
            border: "1px solid #ddd",
            borderRadius: "5px",
            outline: "none",
            fontSize: "14px",
          }}
        />
      </div>

      {/* Password Input */}
      <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
        <i
          className="fas fa-lock"
          style={{ fontSize: "16px", color: "#777", marginRight: "10px" }}
        ></i>
        <input
          type="password"
          placeholder="Password"
          style={{
            flex: 1,
            padding: "10px",
            border: "1px solid #ddd",
            borderRadius: "5px",
            outline: "none",
            fontSize: "14px",
          }}
        />
      </div>

      {/* Sign Up Buttons */}
      <div style={{ marginBottom: "10px" }}>
        <button
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            padding: "10px",
            border: "1px solid #ddd",
            borderRadius: "5px",
            backgroundColor: "#fff",
            cursor: "pointer",
            marginBottom: "10px",
          }}
        >
          {/* <Image
            src="/images/google-icon.png" // Replace with actual Google icon image
            alt="Google"
            style={{ width: "16px", height: "16px", marginRight: "10px" }}
          /> */}

<Image
  src="/images/google-icon.png" // Replace with actual Google icon image
  alt="Google"
  width={16} // Define width explicitly
  height={16} // Define height explicitly
  style={{ marginRight: "10px" }} // Inline style for margin
/>

          Sign up with Google
        </button>
        <button
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            padding: "10px",
            border: "1px solid #ddd",
            borderRadius: "5px",
            backgroundColor: "#fff",
            cursor: "pointer",
          }}
        >
          {/* <Image
            src="/images/apple-icon.png" // Replace with actual Apple icon image
            alt="Apple"
            style={{ width: "16px", height: "16px", marginRight: "10px" }}
          /> */}
          <Image
  src="/images/apple-icon.png" // Replace with actual Google icon image
  alt="Google"
  width={16} // Define width explicitly
  height={16} // Define height explicitly
  style={{ marginRight: "10px" }} // Inline style for margin
/>
          Sign up with Apple
        </button>
      </div>

      {/* FAQ Section */}
      <div
        style={{
          backgroundColor: "#F9F9F9",
          border: "1px solid #ddd",
          borderRadius: "5px",
          padding: "15px",
          cursor: "pointer",
        }}

        onClick={() => setIsOpen(!isOpen)}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: "16px", fontWeight: "bold", color: "#333" }}>How we serve food?</span>
          <i
            className={`fas ${isOpen ? "fa-minus" : "fa-plus"}`}
            style={{ fontSize: "16px", color: "#777" }}
          ></i>
        </div>
        {isOpen && (
          <p style={{ marginTop: "10px", fontSize: "14px", color: "#555" }}>
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Nisi quis modi ullam amet debitis libero veritatis
            enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?
          </p>
        )}
      </div>
    </div>
     {/* Profile 33*/}
     <div
      style={{
        border: "2px solid #D2AFFF",
        borderRadius: "8px",
        padding: "20px",
        maxWidth: "300px",
        textAlign: "center",
        margin: "0 auto",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Icon */}
      <div style={{ marginBottom: "15px" }}>
        <i
          className="fas fa-child"
          style={{
            fontSize: "40px",
            color: "#333",
          }}
        ></i>
      </div>

      {/* Title */}
      <h3 style={{ margin: "10px 0", fontSize: "18px", fontWeight: "bold", color: "#333" }}>
        Clean Environment
      </h3>

      {/* Description */}
      <p style={{ fontSize: "14px", color: "#666", lineHeight: "1.6" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat.
      </p>
    </div>
    {/* Profile 34*/}
    <div>
      {/* Navigation Bar */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 20px",
          backgroundColor: "#000",
          color: "#fff",
          fontFamily: "Arial, sans-serif",
        }}
      >
        {/* Logo */}
        <div style={{ fontSize: "24px", fontWeight: "bold", color: "#F79C00" }}>
          Food<span style={{ color: "#fff" }}>tuck</span>
        </div>

        {/* Navigation Links */}
        <ul
          style={{
            display: "flex",
            listStyle: "none",
            gap: "20px",
            margin: 0,
            padding: 0,
          }}
        >
          <li style={styles.navLink}>Home</li>
          <li style={styles.navLink}>Menu</li>
          <li style={styles.navLink}>Blog</li>
          <li style={styles.navLink}>Pages</li>
          <li style={styles.navLink}>About</li>
          <li style={styles.navLink}>Shop</li>
          <li style={styles.navLink}>Contact</li>
        </ul>

        {/* Icons */}
        <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
          <i className="fas fa-search" style={styles.icon}></i>
          <i className="fas fa-shopping-cart" style={styles.icon}></i>
        </div>
      </nav>

      {/* Hero Section */}
      <div
        style={{
          position: "relative",
          textAlign: "center",
          color: "#fff",
          fontFamily: "Arial, sans-serif",
        }}
      >
        {/* Background Image */}
        <div style={{ position: "relative", height: "300px", width: "100%" }}>
          <Image
            src="/images/hero-image.jpeg" // Replace with your actual image path
            alt="Hero Background"
            layout="fill"
            objectFit="cover"
          />
        </div>

        {/* Overlay Content */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <h1 style={{ fontSize: "36px", fontWeight: "bold", marginBottom: "10px" }}>
            Our Menu
          </h1>
          <p style={{ fontSize: "16px", color: "#F79C00" }}>
            Home &gt; <span style={{ color: "#fff" }}>Menu</span>
          </p>
        </div>
      </div>
    </div>
    {/* Profile 35*/}
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      {/* Feature 1: 120 Item food */}
      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <i
          className="fas fa-mug-hot"
          style={{
            fontSize: "40px",
            color: "#333",
            marginBottom: "10px",
          }}
        ></i>
        <h3 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "10px" }}>120 Item food</h3>
        <p style={{ fontSize: "14px", color: "#666", lineHeight: "1.6" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat.
        </p>
      </div>

      {/* Feature 2: Best Chef */}
      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <i
          className="fas fa-user-graduate"
          style={{
            fontSize: "40px",
            color: "#333",
            marginBottom: "10px",
          }}
        ></i>
        <h3 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "10px" }}>Best Chef</h3>
        <p style={{ fontSize: "14px", color: "#666", lineHeight: "1.6" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat.
        </p>
      </div>

      {/* FAQ Section */}
      <div
        style={{
          backgroundColor: "#F9F9F9",
          border: "1px solid #ddd",
          borderRadius: "5px",
          padding: "15px",
          textAlign: "left",
          cursor: "pointer",
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: "16px", fontWeight: "bold", color: "#333" }}>How we serve food?</span>
          <i
            className={`fas ${isOpen ? "fa-minus" : "fa-plus"}`}
            style={{ fontSize: "16px", color: "#777" }}
          ></i>
        </div>
        {isOpen && (
          <p style={{ marginTop: "10px", fontSize: "14px", color: "#555" }}>
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Nisi quis modi ullam amet debitis libero veritatis
            enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?
          </p>
        )}
      </div>
    </div>

    
    </div>
    );
  };
  
  // Styles
  const styles = {
    navItem: {
      cursor: "pointer",
      color: "#fff",
      textDecoration: "none",
      fontSize: "16px",
    },
    card: {
      width: "300px",
      border: "1px solid #ccc",
      borderRadius: "8px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      overflow: "hidden",
      backgroundColor: "#fff",
    },
  };
  
  export default FoodTruckPage;
  