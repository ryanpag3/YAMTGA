#!/usr/bin/env bash

export $(grep -v '^#' .integration-test.env | xargs)