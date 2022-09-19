package com.ssafy.backend.service;

import com.ssafy.backend.db.entity.Nft;
import com.ssafy.backend.db.entity.User;
import com.ssafy.backend.db.entity.UserLike;
import com.ssafy.backend.db.repository.UserLikeRepository;
import com.ssafy.backend.dto.Like;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class userLikeService {

    @Autowired
    private UserLikeRepository userLikeRepository;
    @Autowired
    private UserService userService;
    @Autowired
    private NftService nftService;

    @Transactional
    public void clickBoardLikes(Like like) {
        // todo : userWalletAddress로 user정보 가져오기
        String userWalletAddress = like.getUserWalletAddress();
        User user = userService.findByUserWalletAddress(userWalletAddress);
        int userId = user.getId();

        // todo : nftAddress로 nft정보 가져오기
        String nftAddress = like.getNftAddress();
        Nft nft = nftService.findByNftAddress(nftAddress);
        int nftId = nft.getId();

        //좋아요 누르기
        UserLike userLike = userLikeRepository.findByUserAndNftId(userId, nftId);
        // todo : 여기 해야된다~~
        // userLike가 null값이면 행을 만들어주고

        // null이 isCancled를 바꿔준다.

        userLikeRepository.save(userLike);
    }


}
