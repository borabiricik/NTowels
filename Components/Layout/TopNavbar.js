import React from 'react'
import { Navbar, Nav, Container } from "react-bootstrap"
import Link from "next/link"
import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation';


export default function TopNavbar() {

    const router = useRouter();
    const { t } = useTranslation("common");

    const changeLanguage = (e) => {
        const locale = e.target.value;
        router.push("/", "/", { locale })
    }
    return (
        <Navbar variant="light" expand="lg" >
            <Container className="d-flex justify-content-center align-items-center">

                <Navbar.Brand className="font-bold">
                    <Link href="/">
                        <a className="btn"><h1>NTowels</h1></a>
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle className="ml-auto" aria-controls="navbar" />

                <Navbar.Collapse id="navbar">
                    <Nav className="align-items-center justify-content-center text-center text-md-center justify-content-md-start w-100">
                        <Nav.Item >
                            <Link href="/">
                                <a className="btn font-medium">{t("homepage")}</a>
                            </Link>
                        </Nav.Item>

                        <Nav.Item >
                            <Link href="/products">
                                <a className="btn font-medium">{t("products")}</a>
                            </Link>
                        </Nav.Item>

                        <Nav.Item >
                            <Link href="/aboutus">
                                <a className="btn font-medium">{t("aboutUs")}</a>
                            </Link>
                        </Nav.Item>

                        <Nav.Item >
                            <Link href="/contact">
                                <a className="btn font-medium">{t("contact")}</a>
                            </Link>
                        </Nav.Item>

                        <Nav.Item className="ml-auto font-bold" >
                            <select className="form-control" onChange={changeLanguage}>
                                <option value="tr">TR</option>
                                <option value="en">EN</option>

                            </select>
                        </Nav.Item>

                    </Nav>
                </Navbar.Collapse>

            </Container>


        </Navbar >

    )
}
