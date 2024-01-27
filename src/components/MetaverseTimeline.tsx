/* eslint-disable @next/next/no-img-element */
import { fontClash } from "@/fonts"

const MetaverseTimeline = () => {
    return (
        <div className="overflow-hidden bg-transparent py-16 lg:py-24">
            <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
                <div className="absolute left-full hidden -translate-x-1/4 translate-y-1/4 scale-x-[-1] lg:block">
                    <span
                        style={{
                            boxSizing: "border-box",
                            display: "inline-block",
                            overflow: "hidden",
                            width: 1080,
                            height: 1080,
                            background: "none",
                            opacity: 1,
                            border: 0,
                            margin: 0,
                            padding: 0,
                            position: "relative",
                        }}
                    >
                        <img
                            alt="Light"
                            draggable="false"
                            srcSet="/bgFeatureLight.svg 1x, /bgFeatureLight.svg 2x"
                            src="/bgFeatureLight.svg"
                            decoding="async"
                            data-nimg="fixed"
                            style={{
                                position: "absolute",
                                inset: 0,
                                boxSizing: "border-box",
                                padding: 0,
                                border: "none",
                                margin: "auto",
                                display: "block",
                                width: 0,
                                height: 0,
                                minWidth: "100%",
                                maxWidth: "100%",
                                minHeight: "100%",
                                maxHeight: "100%",
                            }}
                        />
                    </span>
                </div>
                <div className="relative lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
                    <div className="relative">
                        <span className="text-sm font-semibold uppercase text-contrast-medium">See the light</span>
                        <h2
                            className={[
                                "mt-3 text-2xl font-clash font-extrabold tracking-tight text-gray-100 sm:text-6xl",
                                fontClash.className,
                            ].join(" ")}
                        >
                            Metaverse Timeline
                        </h2>
                        <h3 className="mt-3 text-lg text-contrast-medium md:text-2xl">
                            Keep up to date with everything that is happening on the metaverse.
                        </h3>
                        <dl className="mt-10 grid grid-cols-2 gap-8">
                            <div className="relative">
                                <dt>
                                    <p className="text-lg font-medium leading-6 text-contrast-higher">NFTs</p>
                                </dt>
                                <dd className="mt-2 text-base text-contrast-medium">
                                    See what your favorite NFT collectors are minting.
                                </dd>
                            </div>
                            <div className="relative">
                                <dt>
                                    <p className="text-lg font-medium leading-6 text-contrast-higher">DAOs</p>
                                </dt>
                                <dd className="mt-2 text-base text-contrast-medium">
                                    See what proposals members of your community are participating in.
                                </dd>
                            </div>
                            <div className="relative">
                                <dt>
                                    <p className="text-lg font-medium leading-6 text-contrast-higher">POAPs</p>
                                </dt>
                                <dd className="mt-2 text-base text-contrast-medium">
                                    Keep up to date with IRL events that your friends have attended.
                                </dd>
                            </div>
                            <div className="relative">
                                <dt>
                                    <p className="text-lg font-medium leading-6 text-contrast-higher">DeFi</p>
                                </dt>
                                <dd className="mt-2 text-base text-contrast-medium">
                                    Follow your degnens and hunt for the most underated alpha.
                                </dd>
                            </div>
                            <div className="relative">
                                <dt>
                                    <p className="text-lg font-medium leading-6 text-contrast-higher">
                                        + More coming soon
                                    </p>
                                </dt>
                                <dd className="mt-2 text-base text-contrast-medium" />
                            </div>
                        </dl>
                    </div>
                    <div className="relative -mx-4 mt-10 lg:mt-0" aria-hidden="true">
                        <span
                            style={{
                                boxSizing: "border-box",
                                display: "inline-block",
                                overflow: "hidden",
                                width: "initial",
                                height: "initial",
                                background: "none",
                                opacity: 1,
                                border: 0,
                                margin: 0,
                                padding: 0,
                                position: "relative",
                                maxWidth: "100%",
                            }}
                        >
                            <span
                                style={{
                                    boxSizing: "border-box",
                                    display: "block",
                                    width: "initial",
                                    height: "initial",
                                    background: "none",
                                    opacity: 1,
                                    border: 0,
                                    margin: 0,
                                    padding: 0,
                                    maxWidth: "100%",
                                }}
                            >
                                <img
                                    alt=""
                                    aria-hidden="true"
                                    src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27720%27%20height=%27720%27/%3e"
                                    style={{
                                        display: "block",
                                        maxWidth: "100%",
                                        width: "initial",
                                        height: "initial",
                                        background: "none",
                                        opacity: 1,
                                        border: 0,
                                        margin: 0,
                                        padding: 0,
                                    }}
                                />
                            </span>
                            <img
                                alt="App Icon"
                                draggable="false"
                                src="/imgFeatureTimeline.webp"
                                decoding="async"
                                data-nimg="intrinsic"
                                style={{
                                    position: "absolute",
                                    inset: 0,
                                    boxSizing: "border-box",
                                    padding: 0,
                                    border: "none",
                                    margin: "auto",
                                    display: "block",
                                    width: 0,
                                    height: 0,
                                    minWidth: "100%",
                                    maxWidth: "100%",
                                    minHeight: "100%",
                                    maxHeight: "100%",
                                }}
                            />
                            <noscript />
                        </span>
                    </div>
                </div>
                <div className="relative mt-12 sm:mt-16 lg:mt-24">
                    <div className="absolute right-full hidden translate-x-1/4 translate-y-1/4 lg:block">
                        <span
                            style={{
                                boxSizing: "border-box",
                                display: "inline-block",
                                overflow: "hidden",
                                width: 1080,
                                height: 1080,
                                background: "none",
                                opacity: 1,
                                border: 0,
                                margin: 0,
                                padding: 0,
                                position: "relative",
                            }}
                        >
                            <img
                                alt="Light"
                                draggable="false"
                                srcSet="/bgFeatureLight.svg 1x, /bgFeatureLight.svg 2x"
                                src="/bgFeatureLight.svg"
                                decoding="async"
                                data-nimg="fixed"
                                style={{
                                    position: "absolute",
                                    inset: 0,
                                    boxSizing: "border-box",
                                    padding: 0,
                                    border: "none",
                                    margin: "auto",
                                    display: "block",
                                    width: 0,
                                    height: 0,
                                    minWidth: "100%",
                                    maxWidth: "100%",
                                    minHeight: "100%",
                                    maxHeight: "100%",
                                }}
                            />
                        </span>
                    </div>
                    <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:items-center lg:gap-8">
                        <div className="lg:col-start-2">
                            <span className="text-sm font-semibold uppercase text-contrast-medium">Digital Assets</span>
                            <h3
                                className={[
                                    "mt-3 font-clash text-2xl font-extrabold tracking-tight text-gray-100 sm:text-6xl",
                                    fontClash.className,
                                ].join(" ")}
                            >
                                Profile Board
                            </h3>
                            <p className="mt-3 text-lg text-contrast-medium md:text-2xl">
                                Showcase your digital assets in one place.
                                <br />
                                We aggregate every asset that belongs to you.
                            </p>
                        </div>
                        <div className="relative -mx-4 mt-10 lg:col-start-1 lg:mt-0">
                            <span
                                style={{
                                    boxSizing: "border-box",
                                    display: "inline-block",
                                    overflow: "hidden",
                                    width: "initial",
                                    height: "initial",
                                    background: "none",
                                    opacity: 1,
                                    border: 0,
                                    margin: 0,
                                    padding: 0,
                                    position: "relative",
                                    maxWidth: "100%",
                                }}
                            >
                                <span
                                    style={{
                                        boxSizing: "border-box",
                                        display: "block",
                                        width: "initial",
                                        height: "initial",
                                        background: "none",
                                        opacity: 1,
                                        border: 0,
                                        margin: 0,
                                        padding: 0,
                                        maxWidth: "100%",
                                    }}
                                >
                                    <img
                                        alt=""
                                        aria-hidden="true"
                                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27720%27%20height=%27720%27/%3e"
                                        style={{
                                            display: "block",
                                            maxWidth: "100%",
                                            width: "initial",
                                            height: "initial",
                                            background: "none",
                                            opacity: 1,
                                            border: 0,
                                            margin: 0,
                                            padding: 0,
                                        }}
                                    />
                                </span>
                                <img
                                    alt="Feature Board"
                                    draggable="false"
                                    src="/imgFeatureBoard.png"
                                    decoding="async"
                                    data-nimg="intrinsic"
                                    style={{
                                        position: "absolute",
                                        inset: 0,
                                        boxSizing: "border-box",
                                        padding: 0,
                                        border: "none",
                                        margin: "auto",
                                        display: "block",
                                        width: 0,
                                        height: 0,
                                        minWidth: "100%",
                                        maxWidth: "100%",
                                        minHeight: "100%",
                                        maxHeight: "100%",
                                    }}
                                />
                                <noscript />
                            </span>
                        </div>
                    </div>
                    <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
                        <div className="relative">
                            <span className="text-sm font-semibold uppercase text-contrast-medium">
                                Connect on Web 3.0
                            </span>
                            <h3
                                className={[
                                    "mt-3 font-clash text-2xl font-extrabold tracking-tight text-gray-100 sm:text-6xl",
                                    fontClash.className,
                                ].join(" ")}
                            >
                                Social graph
                            </h3>
                            <p className="mt-3 text-lg text-contrast-medium md:text-2xl">
                                Follow your favorite people on the blockchain. <br />
                                Discover connections that was previously not possible before.
                            </p>
                        </div>
                        <div className="relative -mx-4 mt-10 lg:mt-0" aria-hidden="true">
                            <span
                                style={{
                                    boxSizing: "border-box",
                                    display: "inline-block",
                                    overflow: "hidden",
                                    width: "initial",
                                    height: "initial",
                                    background: "none",
                                    opacity: 1,
                                    border: 0,
                                    margin: 0,
                                    padding: 0,
                                    position: "relative",
                                    maxWidth: "100%",
                                }}
                            >
                                <span
                                    style={{
                                        boxSizing: "border-box",
                                        display: "block",
                                        width: "initial",
                                        height: "initial",
                                        background: "none",
                                        opacity: 1,
                                        border: 0,
                                        margin: 0,
                                        padding: 0,
                                        maxWidth: "100%",
                                    }}
                                >
                                    <img
                                        alt=""
                                        aria-hidden="true"
                                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27720%27%20height=%27720%27/%3e"
                                        style={{
                                            display: "block",
                                            maxWidth: "100%",
                                            width: "initial",
                                            height: "initial",
                                            background: "none",
                                            opacity: 1,
                                            border: 0,
                                            margin: 0,
                                            padding: 0,
                                        }}
                                    />
                                </span>
                                <img
                                    alt="Feature Connect"
                                    draggable="false"
                                    src="/imgFeatureConnect.png"
                                    decoding="async"
                                    data-nimg="intrinsic"
                                    style={{
                                        position: "absolute",
                                        inset: 0,
                                        boxSizing: "border-box",
                                        padding: 0,
                                        border: "none",
                                        margin: "auto",
                                        display: "block",
                                        width: 0,
                                        height: 0,
                                        minWidth: "100%",
                                        maxWidth: "100%",
                                        minHeight: "100%",
                                        maxHeight: "100%",
                                    }}
                                />
                                <noscript />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MetaverseTimeline
