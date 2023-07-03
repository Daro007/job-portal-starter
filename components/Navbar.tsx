"use client"
import { Navbar, Link, Text, Avatar, Dropdown } from "@nextui-org/react";
import { Pacifico } from 'next/font/google'

const pacifico = Pacifico({
    subsets: ['cyrillic'],
    display: 'swap',
    weight: "400"
})

const collapseItems = [
    {
        name: "Home",
        link: "/"
    },
    {
        name: "Jobs",
        link: "/jobs"
    },
    {
        name: "About",
        link: "/about"
    }
    
];

export default function App() {

   

    return (
        <Navbar css={{
            // background: "#084b83",
            backgroundColor: "#084b83",
            backdropFilter: "none",
            $$navbarBackgroundColor: "initial",
            $$navbarBlurBackgroundColor: "none",
            $$navbarBlur: "initial",
            opacity: 0.8
        }} isBordered variant="sticky">
            <Navbar.Toggle css={{
                background: "#fff",
            }} 
             showIn="xs" />
            <Link block href="/">
            <Navbar.Brand
                css={{
                    "@xs": {
                        w: "27%",
                        // backgroundColor: "#084b83"
                        $$navbarBackgroundColor: "initial",
                        backgroundColor: "#084b83",
                        $$navbarBlurBackgroundColor: "none",
                    },
                }}
            >
                
                    <p className="navbarLogo"> <span className={pacifico.className}>Your job on IT </span></p>

            </Navbar.Brand>
            </Link>
            <Navbar.Content
                enableCursorHighlight
                activeColor="default"
                hideIn="xs"
                variant="highlight-rounded"
                css={{
                    backgroundColor: "#084b83",
                    $$navbarBackgroundColor: "initial",
                    $$navbarBlurBackgroundColor: "none",
                    color: "#fff",
                }}
            >
                <Navbar.Link block href="/jobs">Jobs</Navbar.Link>
                <Navbar.Link block href="/about">About </Navbar.Link>
                <Navbar.Link block href="/contact">Contact</Navbar.Link>
            </Navbar.Content>
            {/* <Navbar.Content
                css={{
                    "@xs": {
                        w: "12%",
                        jc: "flex-end",
                        backgroundColor: "#084b83"
                    },
                }}
            >
                <Dropdown placement="bottom-right">
                    <Navbar.Item>
                        <Dropdown.Trigger>
                            <Avatar
                                bordered
                                as="button"
                                color="secondary"
                                size="md"
                                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                            />
                        </Dropdown.Trigger>
                    </Navbar.Item>
                    <Dropdown.Menu
                        aria-label="User menu actions"
                        color="secondary"
                        onAction={(actionKey) => console.log({ actionKey })}
                    >
                        <Dropdown.Item key="profile" css={{ height: "$18" }}>
                            <Text b color="inherit" css={{ d: "flex" }}>
                                Signed in as
                            </Text>
                            <Text b color="inherit" css={{ d: "flex" }}>
                                zoey@example.com
                            </Text>
                        </Dropdown.Item>
                        <Dropdown.Item key="settings" withDivider>
                            My Settings
                        </Dropdown.Item>
                        <Dropdown.Item key="team_settings">Team Settings</Dropdown.Item>
                        <Dropdown.Item key="analytics" withDivider>
                            Analytics
                        </Dropdown.Item>
                        <Dropdown.Item key="system">System</Dropdown.Item>
                        <Dropdown.Item key="configurations">Configurations</Dropdown.Item>
                        <Dropdown.Item key="help_and_feedback" withDivider>
                            Help & Feedback
                        </Dropdown.Item>
                        <Dropdown.Item key="logout" withDivider color="error">
                            Log Out
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Navbar.Content> */}
            <Navbar.Collapse css={{
                backgroundColor: "#084b83",
                $$navbarBackgroundColor: "initial",
                $$navbarBlurBackgroundColor: "transparent",
                $$navbarBlur: "initial",
            }}>
                {collapseItems.map((item, index) => (
                    <Navbar.CollapseItem
                        key={item.name}
                        activeColor="secondary"
                        // css={{
                        //     color: index === collapseItems.length - 1 ? "$error" : "",
                        // }}
                        // isActive={index === 2}
                    >
                        <Link
                            color="inherit"
                            css={{
                                minWidth: "100%",
                            }}
                            href={item.link}
                        >
                            {item.name}
                        </Link>
                    </Navbar.CollapseItem>
                ))}
            </Navbar.Collapse>
        </Navbar>
    )

}