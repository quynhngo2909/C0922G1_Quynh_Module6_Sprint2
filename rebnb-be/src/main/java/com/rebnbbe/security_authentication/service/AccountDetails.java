package com.rebnbbe.security_authentication.service;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.rebnbbe.model.Account;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

public class AccountDetails implements UserDetails {
    private String username;
    @JsonIgnore
    private String password;
    private List<GrantedAuthority> authorities = null;

    public AccountDetails(String username, String password, List<GrantedAuthority> authorities) {
        this.username = username;
        this.password = password;
        this.authorities = authorities;
    }

    public static AccountDetails build(Account account) {
        List<GrantedAuthority> authorities = account.getAccountRoleSet().stream()
                .map(role -> new SimpleGrantedAuthority("ROLE_" + role.getRole().getName()))
                .collect(Collectors.toList());
        return new AccountDetails(
                account.getUser().getEmail(),
                account.getPassword(),
                authorities);
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return username;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    public boolean equals (Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return  false;
        AccountDetails account = (AccountDetails) o;
    return Objects.equals(username, account.username);
    }
}
