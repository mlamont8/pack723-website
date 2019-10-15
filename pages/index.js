import React from "react";
import Head from "next/head";
import Layout from "../components/layout";

const Home = () => (
  <Layout>
    <div className="home">
      <section className="hero is-large">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Hero title</h1>
            <h2 className="subtitle">Hero subtitle</h2>
          </div>
        </div>
      </section>
      <section className="section">
        <h1 className="title has-text-centered">PACK 723</h1>
        <div className="container is-medium">
          <p>
            Pack 723 is a Cub Scout pack that boys around Greensboro meet up to
            have fun. The fun includes more than simply good times; it includes
            the satisfaction of meeting challenges, the confidence created by
            accomplishing goals and the camaraderie of lasting friendships. Boys
            have a blast completing adventures at the same time they achieve the
            aims of scouting – character development, participatory citizenship,
            personal fitness, outdoor skills, and leadership and life skills. We
            invite you and your son to join us!
          </p>
        </div>
      </section>

      <section className="section has-text-centered">
        <a href="#" className="button is-warning is-medium">
          Join Us
        </a>
      </section>

      <section className="section scout-law">
        <div>
          <h2 className="subtitle">A Scout is...</h2>
          <div className="grid has-text-centered" style={{ width: "100%" }}>
            <content className="a content">
              <ul>
                <li>Trustworthy</li>
                <li>Loyal</li>
                <li>Helpful</li>
              </ul>
            </content>
            <div className="b">
              <figure className="image is-5by4">
                <img src="/images/front-images/front1.jpg" />
              </figure>
            </div>
            <content className="c content">
              <ul>
                <li>Friendly</li>
                <li>Courteous</li>
                <li>Kind</li>
              </ul>
            </content>
            <div className="d">
              <figure className="image is-5by4">
                <img src="/images/front-images/front2.jpg" />
              </figure>
            </div>
            <content className="e content">
              <ul>
                <li>Obedient</li>
                <li>Cheerful</li>
                <li>Thrifty</li>
              </ul>
            </content>
            <div className="f">
              <figure className="image is-5by4">
                <img src="/images/front-images/front3.jpg" />
              </figure>
            </div>
            <content className="g content">
              <ul>
                <li>Brave</li>
                <li>Clean</li>
                <li>Reverent</li>
              </ul>
            </content>
            <div className="h">
              <figure className="image is-5by4">
                <img src="/images/front-images/front4.jpg" />
              </figure>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Scout Oath</h2>
          <p>
            On my honor I will do my best To do my duty to God and my country
            and to obey the Scout Law; To help other people at all times; To
            keep myself physically strong, mentally awake, and morally straight.
          </p>
        </div>
      </section>
    </div>
    <style jsx>
      {`
        .hero {
          background: url("images/front-images/front4.jpg") center/cover;
        }
        .grid {
          display: grid;
          gap: 1em;
          grid-template-areas:
            "a b c d"
            "e f g h";
        }

        @media (max-width: 620px) {
          .grid {
            align-items: center;
          }
          .grid div {
            grid-column: 1;
            height: 100%;
            width: 100%;
          }
        }

        @media (max-width: 1000px) {
          .grid {
            grid-template-areas:
              "a b"
              "c d"
              "e f"
              "g h";
          }
        }

        .grid .content {
          align-self: center;
          font-size: 1.5rem;
        }

        ul {
          list-style-type: none;
          margin: 0;
          padding: 0;
        }

        .frontGrid {
          display: flex;
          flex-wrap: wrap;
        }
        .frontGrid div {
          flex: 1 0 25%;
          height: 250px;
        }
        .scoutLaw {
          background-color: none;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .scoutLaw ul li {
          list-style-type: none;
        }
        .lawImage img {
          width: 100%;
          height: auto;
        }
        .joinUs {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 150px;
        }

        .joinUs button {
          height: 20px;
          width: 120px;
          border-width: 15px;
          font-size: 16px;
          border-radius: 100px;
          text-transform: uppercase;
          background-color: "#003f99";
        }

        .welcome {
          margin: 50px 0;
        }

        .welcome h1,
        .scoutlaw-title {
          text-align: center;
        }

        .welcome p {
          margin: 0 200px;
        }

        .scout-oath {
          text-align: center;
        }
      `}
    </style>
  </Layout>
);

export default Home;
