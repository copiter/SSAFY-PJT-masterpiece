package com.ssafy.backend.controller;

import com.ssafy.backend.dto.UserSigninDto;
import com.ssafy.backend.dto.UserUpdateDto;
import com.ssafy.backend.service.UserService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/user")
@CrossOrigin("*")
@Slf4j
public class UserController {
    @Autowired
    UserService userService;

//    @Operation(summary = "회원가입 API", description = "회원 정보를 인풋으로 받아 회원가입 처리")
//    @PostMapping("/signup")
//    public ResponseEntity register(@RequestBody UserSignupDto dto) {
//        try {
//            userService.register(dto);
//        } catch(Exception e){
//            System.out.println("유저 회원가입 실패!");
//            return new ResponseEntity(HttpStatus.BAD_REQUEST);
//        }
//        return new ResponseEntity(HttpStatus.OK);
//    }

    @Operation(summary = "로그인 API", description = "wallet_address를 인풋으로 받아 로그인 처리")
    @PostMapping("/signin")
    public ResponseEntity<UserSigninDto> login(@RequestBody Map<String, String> map) {
        String wallet_address = map.get("wallet_address");
        try{
            //wallet_address로 유저 검색하여 있으면 db에 새로 저장
            UserSigninDto dto = userService.signin(wallet_address);
            return new ResponseEntity(dto, HttpStatus.OK);
        } catch(Exception e){
            System.out.println("유저 로그인 실패!");
            return new ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Operation(summary = "유저 정보 조회 API", description = "wallet_address로 해당 유저 정보 반환")
    @GetMapping
    public ResponseEntity<UserSigninDto> getUserInfo(@RequestParam(value = "wallet-address") String wallet_address) {
        try{
            UserSigninDto dto = userService.getUserInfo(wallet_address);
            if(dto == null) {
                System.out.println("해당 유저가 존재하지 않습니다!");
                return new ResponseEntity(HttpStatus.BAD_REQUEST);
            }
            return new ResponseEntity(dto, HttpStatus.OK);
        } catch(Exception e) {
            return new ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Operation(summary = "유저 정보 수정 API", description = "해당 유저 정보 수정")
    @PutMapping
    public ResponseEntity updateUserInfo(@ModelAttribute UserUpdateDto dto) {
        try{
            userService.updateUserInfo(dto);
            return new ResponseEntity(HttpStatus.OK);
        } catch(Exception e) {
            System.out.println("헤당 유저가 존재하지 않습니다.");
            return new ResponseEntity(HttpStatus.BAD_REQUEST);
        }
    }

    @Operation(summary = "유저 프로필 사진 조회 API", description = "해당 유저 프로필 사진 반환")
    @GetMapping("/image")
    public ResponseEntity getUserImage(@RequestParam(value = "wallet-address") String wallet_address) {

        return new ResponseEntity(HttpStatus.OK);
    }

    @Operation(summary = "티켓 증감 API", description = "해당 유저의 보유한 티켓 수 설정")
    @PutMapping("/ticket")
    public ResponseEntity setTicket(@RequestBody Map<String, String> map) {

        return new ResponseEntity(HttpStatus.OK);
    }

    @Operation(summary = "티켓 수 조회 API", description = "해당 유저의 보유한 티켓 수 반환")
    @GetMapping("/ticket")
    public ResponseEntity getTicket(@RequestParam(value = "wallet-address") String wallet_address) {

        return new ResponseEntity(HttpStatus.OK);
    }

    @Operation(summary = "보유한 자모음 조회 API", description = "해당 유저의 보유한 자모음 반환")
    @GetMapping("/hangul")
    public ResponseEntity getHangul(@RequestParam(value = "wallet-address") String wallet_address) {

        return new ResponseEntity(HttpStatus.OK);
    }

    @Operation(summary = "보유한 NFT 조회 API", description = "해당 유저의 보유한 NFT 목록 반환")
    @GetMapping("/collected")
    public ResponseEntity getCollectedNFT(@RequestParam(value = "wallet-address") String wallet_address) {

        return new ResponseEntity(HttpStatus.OK);
    }

    @Operation(summary = "만든 NFT 조회 API", description = "해당 유저가 민팅한 NFT 목록 반환")
    @GetMapping("/created")
    public ResponseEntity getCreatedNFT(@RequestParam(value = "wallet-address") String wallet_address) {

        return new ResponseEntity(HttpStatus.OK);
    }

    @Operation(summary = "팔고있는 NFT 조회 API", description = "해당 유저가 팔고있는 NFT 목록 반환")
    @GetMapping("/onsale")
    public ResponseEntity getOnSaleNFT(@RequestParam(value = "wallet-address") String wallet_address) {

        return new ResponseEntity(HttpStatus.OK);
    }

    @Operation(summary = "좋아요 한 NFT 조회 API", description = "해당 유저가 찜한 NFT 목록 반환")
    @GetMapping("/favorite")
    public ResponseEntity getLikedNFT(@RequestParam(value = "wallet-address") String wallet_address) {

        return new ResponseEntity(HttpStatus.OK);
    }

    @Operation(summary = "만든 NFT 조회 API", description = "해당 유저의 자/모음 inventory 반환")
    @GetMapping("/inventory")
    public ResponseEntity getInventory(@RequestParam(value = "wallet-address") String wallet_address) {

        return new ResponseEntity(HttpStatus.OK);
    }
}
