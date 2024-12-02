.SILENT:
.PHONY: help backend-dev frontend-dev

help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

backend-dev: ## Runs the backend in development mode
	cd backend \
	&& mvn spring-boot:run

frontend-dev: ## Runs the frontend in development mode
	cd frontend \
	&& ng serve
