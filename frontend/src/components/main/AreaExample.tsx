import React from "react";
import { Link } from 'react-router-dom';
import { Box, Button, Container, Grid } from "@mui/material";
import { UseSelectorHook } from "../../_hook/HangulMakerHook";
import CarouselDisplay from "./CarouselDisplay";

export default function AreaExample() {
	const walletAddress = UseSelectorHook(state => state.user.currentUser.wallet_address);
	const [isLogin, setIsLogin] = React.useState(false);
	React.useEffect(() => {
		if (walletAddress.charAt(0) === '0') {
			setIsLogin(true);
		}
		else {
			setIsLogin(false);
		}
	}, [walletAddress]);
	
	// carousel elements
	const CarouselDispalyElements:JSX.Element[] = [
		<Box sx={{ width: 200, height: 200, background: "red", textAlign: "center" }}
		display="flex" justifyContent="center" alignItems="center">
			NFT예시
		</Box>,
		<Box sx={{ width: 200, height: 200, background: "green", textAlign: "center" }}
		display="flex" justifyContent="center" alignItems="center">
			NFT예시2
		</Box>,
		<Box sx={{ width: 200, height: 200, background: "blue", textAlign: "center" }}
		display="flex" justifyContent="center" alignItems="center">
			NFT예시3
		</Box>,
	];
	return (
		<Container style={{marginTop:"50%"}}>
			<Box sx={{ minHeight:300, boxShadow: 8, borderRadius: "10%", padding: 2, background: "white", textAlign:"center"}}
			display="flex" justifyContent="center" alignItems="center"
			flexDirection="column">
				<Container style={{ marginBottom: 50, fontSize: 30 }}>It Takes Only 5-minutes.<br/>Give it a try!</Container>
				{(!isLogin) ? (<Link to="/login" style={{ padding: 10, background: "yellow", color: "black" }}>Get started</Link>)
					:
					(<Grid container>
						<Grid item xs={6}><Link to="/composehangul" style={{ padding: 10, background: "yellow", color: "black" }}>Created</Link></Grid>
						<Grid item xs={6}><Link to="/learnsyllables" style={{padding:10, background:"yellow", color:"black"}}>Explore</Link></Grid>
					</Grid>
					)}
				<Grid container justifyContent="center" alignItems="center">
					<Grid item xs={12} style={{marginTop:30, textAlign:"center"}}>
						<CarouselDisplay elements={CarouselDispalyElements} />
					</Grid>
				</Grid>
			</Box>
		</Container>
	);
}