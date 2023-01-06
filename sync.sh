#!/usr/bin/env bash

unison -auto -root "$HOME/invokeai" -root "ssh://azurite//main-storage/main/shared/media/images/stable-diffusion/invokeai" \
    -path configs -path embeddings -path outputs -path invokeai.init

