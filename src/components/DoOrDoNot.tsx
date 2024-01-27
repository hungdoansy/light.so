import { fontClash } from "@/fonts"

const DoOrDoNot = () => {
    return (
        <div className="relative bg-transparent">
            <div className="md:hidden">
                <span
                    style={{
                        boxSizing: "border-box",
                        display: "block",
                        overflow: "hidden",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                        position: "absolute",
                        inset: 0,
                    }}
                >
                    <img
                        alt="Planet"
                        draggable="false"
                        sizes="100vw"
                        srcSet="/bgFooterLight.svg 640w, /bgFooterLight.svg 750w, /bgFooterLight.svg 828w, /bgFooterLight.svg 1080w, /bgFooterLight.svg 1200w, /bgFooterLight.svg 1920w, /bgFooterLight.svg 2048w, /bgFooterLight.svg 3840w"
                        src="/bgFooterLight.svg"
                        decoding="async"
                        data-nimg="fill"
                        className="pointer-events-none object-cover object-center"
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
            <div className="absolute bottom-0 z-0 hidden w-full text-center md:block">
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
                            src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%271920%27%20height=%27960%27/%3e"
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
                        alt="Planet"
                        draggable="false"
                        srcSet="/bgFooterLight.svg 1x, /bgFooterLight.svg 2x"
                        src="/bgFooterLight.svg"
                        decoding="async"
                        data-nimg="intrinsic"
                        className="pointer-events-none object-cover object-center"
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
                            objectFit: "cover",
                            objectPosition: "center bottom",
                        }}
                    />
                </span>
            </div>
            <div className="relative z-10 mx-auto max-w-7xl py-12 px-4 text-center sm:px-6 lg:py-32 lg:px-8">
                <div className="inline-block w-24 lg:w-full">
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
                                src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27128%27%20height=%27128%27/%3e"
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
                            src="/icon.png"
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
                                objectFit: "cover",
                            }}
                        />
                        <noscript />
                    </span>
                </div>
                <h2
                    className={[
                        "mt-8 font-clash text-3xl font-extrabold tracking-tight text-bg-dark md:text-4xl xl:text-6xl",
                        fontClash.className,
                    ].join(" ")}
                >
                    <span className="block">
                        Do. Or do not.
                        <br />
                        There is no try.
                    </span>
                </h2>
                <div className="mt-10 flex justify-center">
                    <div className="inline-flex">
                        <a
                            className="inline-flex items-center justify-center rounded-full bg-bg-darker py-3 px-5 text-base font-medium text-contrast-higher hover:bg-bg-light"
                            href="/explore"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                                className="mr-2 -ml-0.5 h-4 w-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                                />
                            </svg>
                            Explore now
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DoOrDoNot
