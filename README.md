# Apigee "OAS-First" CI/CD using apigee-go-gen, GitHub and Maven 

[![PyPI status](https://img.shields.io/pypi/status/ansicolortags.svg)](https://pypi.python.org/pypi/ansicolortags/) 

**This is not an official Google product.**<BR>This implementation is not an official Google product, nor is it part of an official Google product. Support is available on a best-effort basis via GitHub.

***

## Goal

Simple implementation of a CI/CD pipeline for Apigee using [apigee-go-gen](https://github.com/apigee/apigee-go-gen)
GitHub repository, [CI/CD with GitHub](https://docs.GitHub.com/ee/ci/introduction/) and the Apigee Maven Plugins. 

The CICD pipeline includes:

- Job #1
    - Creation of an Apigee API proxy bundle using a template and an OpenAPI spec as input using [apigee-go-gen](https://github.com/apigee/apigee-go-gen)
- Job #2
    - Git branch dependent Apigee environment selection and proxy naming to allow
    deployment of feature branches as separate proxies in the same environment
    - Open API Specification (Swagger) static code analysis using [stoplight spectral](https://github.com/stoplightio/spectral)
    - Static Apigee Proxy code analysis using [apigeelint](https://github.com/apigee/apigeelint)
    - Integration testing of the deployed proxy using
    [apickli](https://github.com/apickli/apickli)
    - Packaging and deployment of an Apigee configuration using
    [Apigee Config Maven Plugin](https://github.com/apigee/apigee-config-maven-plugin)
    - Packaging and deployment of the API proxy bundle using
    [Apigee Deploy Maven Plugin](https://github.com/apigee/apigee-deploy-maven-plugin)
    - Backup of generated proxy in the GitHub repository, in a separate commit



## Work in progress...
