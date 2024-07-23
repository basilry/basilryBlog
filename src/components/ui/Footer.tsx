"use client"

import { ReactElement, useEffect, useState } from "react"
import classNames from "classnames"
import TextBasic from "@components/atom/TextBasic"
import { useCoreStore } from "@lib/stores/store"
import styles from "@styles/ui/footer.module.scss"

function Footer(): ReactElement {
    const { darkMode } = useCoreStore()

    const [mount, setMount] = useState(false)

    useEffect(() => {
        if (typeof window !== "undefined") {
            setMount(true)
        }
    }, [])

    return (
        <>
            {mount && (
                <div className={classNames(styles.footer, darkMode && styles.dark)}>
                    <div className={styles.leftWrapper}>
                        <TextBasic size="x-small" bold="bold">
                            Copyright ⓒ 2023 by Basilri Kim all rights reserved.
                        </TextBasic>
                    </div>
                    <div className={styles.rightWrapper}>
                        <TextBasic size="x-small" bold="bold">
                            {"basilry@gmail.com"}
                        </TextBasic>
                        <TextBasic size="x-small" bold="bold">
                            {"+82 010-8936-4302"}
                        </TextBasic>
                    </div>
                </div>
            )}
        </>
    )
}

export default Footer
