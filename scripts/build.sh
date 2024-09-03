#!/bin/sh

yarn docusaurus clean-api-docs docs;
yarn docusaurus gen-api-docs docs;
