#!/bin/sh

        for SRC in $( ls *_source.svg );
        do
            FILENAME=$(basename $SRC "_source.svg")
            ./Make_colors.sh ${FILENAME}
        done
