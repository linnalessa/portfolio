import React from "react";
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
  } from "./FooterStyles";

const Footer = () => {
    return (
            <Box>
              <Container>
                <Row style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
                 
                  <Column>
                    <Heading>Contact</Heading>
                    <FooterLink href="#">connect@linnalessandra.com</FooterLink>         
                  </Column>
                  <Column>
                    <Heading>Contact</Heading>
                    <FooterLink href="#">connect@linnalessandra.com</FooterLink>         
                  </Column>
                  <Column>
                    <Heading>XXX</Heading>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <FooterLink href="#" style={{ marginLeft: "10%", fontSize: "25px" }}>
                        <i className="fab fa-facebook-f">
                        </i>
                      </FooterLink>
                      <FooterLink href="https://www.instagram.com/writeitmedia/" style={{ marginLeft: "10%", fontSize: "25px" }}>
                        <i className="fab fa-instagram">
                        </i>
                      </FooterLink>
                      <FooterLink href="#" style={{ marginLeft: "10%", fontSize: "25px" }}>
                        <i className="fab fa-twitter">
                        </i>
                      </FooterLink>
                    </div>
                  </Column>
                </Row>
              </Container>
              <div style={{ color: "white", fontSize: "12px", display: "flex", flexDirection: "column", alignItems: "center", marginTop: "3%" }}>
                <p>Org-number: xxx</p>
                <p>© 2022 - ALL RIGHTS RESERVED. DESIGN BY LINN ALESSANDRA </p>
                <p>STYLING WITH © BOOTSTRAP </p>
              </div>
            </Box>
          );
        };
        export default Footer;