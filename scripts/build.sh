#!/bin/sh

yarn docusaurus clean-api-docs user;
yarn docusaurus clean-api-docs catalog;

yarn docusaurus gen-api-docs user;
yarn docusaurus gen-api-docs catalog;