FROM ubuntu:focal

RUN apt-get update
RUN apt-get --yes upgrade
# Required in case tzdata is a installed, won't install otherwise
ARG DEBIAN_FRONTEND=noninteractive
