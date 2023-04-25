package com.rebnbbe.controller;

import com.rebnbbe.security_authentication.jwt.JwtUtility;
import com.rebnbbe.security_authentication.payload.request.LoginRequest;
import com.rebnbbe.security_authentication.payload.response.JwtResponse;
import com.rebnbbe.security_authentication.service.AccountDetails;
import com.rebnbbe.service.IAccountService;
import com.rebnbbe.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("api/public")
@CrossOrigin
public class SecurityRestController {

    @Autowired
    private JwtUtility jwtUtility;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private IAccountService iAccountService;

    @Autowired
    private IUserService iUserService;

    @PostMapping("/login")
    public ResponseEntity<JwtResponse> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {
//
//        String a = "123123";
//        String b = BCrypt.hashpw(a, BCrypt.gensalt(12));
//        System.out.println(b);
//        boolean c = BCrypt.checkpw(a,"$2a$12$Dc3ALv3rjeU6Oa4lnmaE3eL.4Ca4NsdXX5.le/s/Yxy27MladcVPK");
//        System.out.println(c);

        UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword());
        Authentication authentication = authenticationManager.authenticate(usernamePasswordAuthenticationToken);
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtUtility.generateJwtToken(loginRequest.getUsername());
        AccountDetails userDetails = (AccountDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        List<String> roles = userDetails.getAuthorities().stream()
                .map(GrantedAuthority::getAuthority)
                .collect(Collectors.toList());

        return ResponseEntity.ok(
                new JwtResponse(jwt, userDetails.getUsername(), iUserService.findByEmail(loginRequest.getUsername()).getName(), roles, iUserService.findByEmail(loginRequest.getUsername()).getImage()));
    }
}
