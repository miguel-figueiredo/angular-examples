package com.example.backend;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

import static org.springframework.security.config.Customizer.withDefaults;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig {

	@Bean
	public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
    http
      // if Spring MVC is on classpath and no CorsConfigurationSource is provided,
      // Spring Security will use CORS configuration provided to Spring MVC
      .cors(withDefaults())
      .csrf().disable()
      .authorizeHttpRequests().anyRequest().permitAll();
		return http.build();
	}
}
