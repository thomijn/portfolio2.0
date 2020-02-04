import React, { useState, useEffect } from 'react'
import * as THREE from 'three'
import { useTransition, a, config } from 'react-spring';
import { CircularProgress } from '@material-ui/core';

function Loading() {
    const [finished, set] = useState(false)
    const [width, setWidth] = useState(0)
    useEffect(() => {
        THREE.DefaultLoadingManager.onLoad = () => set(true)
        THREE.DefaultLoadingManager.onProgress = (url, itemsLoaded, itemsTotal) =>
            setWidth((itemsLoaded / itemsTotal) * 200)
    }, [])

    const props = useTransition(finished, null, {
        from: { opacity: 1, width: 0 },
        leave: { opacity: 0 },
        update: { width },
        config: config.stiff
    })

    return props.map(
        ({ item: finished, key, props: { opacity, width } }) =>
            !finished && (
                <a.div className="loading" key={key} style={{ opacity }}>
                    <div className="loading-bar-container">
                        <a.div className="loading-bar" style={{ width }} />
                    </div>
                    <div >
                        <p style={{
                            fontWeight: "400",
                            fontFamily: "Hind",
                            lineHeight: "184.69%",
                            letterSpacing: "0.03em",
                        }}>Loading</p>
                    </div>
                </a.div>
            ),
    )
}

export default Loading
