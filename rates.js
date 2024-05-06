// These exchange rates are with respect to eur.

const exRate = {
    "$myro": 3.60746778,
    "$wen": 4810.40367939,
    "00": 10.63647289,
    "0x0": 3.47521175,
    "1000sats": 1790.27162404,
    "1inch": 1.7824881,
    "aave": 0.0092741809,
    "abt": 0.68560821,
    "ach": 41.65380421,
    "acs": 336.00092593,
    "ada": 1.54108715,
    "aed": 3.99769155,
    "aergo": 6.63402194,
    "aero": 2.69073136,
    "afn": 77.86064546,
    "agix": 1.17283082,
    "agld": 0.72665821,
    "ai": 0.71617062,
    "aioz": 4.41998782,
    "akt": 0.24038526,
    "alcx": 0.035787081,
    "aleph": 3.60120079,
    "alex": 2.96616182,
    "algo": 4.62755379,
    "alice": 0.60229212,
    "all": 103.88286263,
    "alph": 0.33552284,
    "alt": 2.27869233,
    "alusd": 1.105733,
    "amd": 437.60622021,
    "amp": 228.33467349,
    "ang": 1.94981467,
    "ankr": 28.87264289,
    "ant": 0.12098319,
    "aoa": 909.12487252,
    "ape": 0.52522583,
    "apex": 0.35694488,
    "api3": 0.32765779,
    "apl": 25519.76015189,
    "apt": 0.082515028,
    "ar": 0.032601577,
    "arb": 0.54481423,
    "ark": 1.14699975,
    "arkm": 0.4781933,
    "arpa": 16.35827198,
    "ars": 920.71885009,
    "asm": 31.59608185,
    "ast": 9.04564188,
    "astr": 7.47085229,
    "ata": 7.71552506,
    "atom": 0.090366258,
    "ats": 13.7603,
    "auction": 0.043589309,
    "aud": 1.66212076,
    "audio": 3.76302454,
    "aurora": 3.88108021,
    "avax": 0.027824523,
    "avt": 0.5111,
    "awg": 1.94850044,
    "axl": 0.52361262,
    "axs": 0.11200117,
    "azero": 0.78974506,
    "azm": 9256.10572763,
    "azn": 1.85122115,
    "babydoge": 515664601.31635785,
    "badger": 0.20935442,
    "bake": 2.83469822,
    "bal": 0.21241815,
    "bam": 1.95583,
    "band": 0.49506276,
    "bat": 3.52479671,
    "bbd": 2.17709547,
    "bch": 0.0027197519,
    "bdt": 119.46618447,
    "bdx": 26.97028803,
    "beam": 27.11665179,
    "bef": 40.3399,
    "bgb": 1.22747651,
    "bgn": 1.95583,
    "bhd": 0.40929395,
    "bico": 2.18405658,
    "bif": 3111.05402407,
    "bigtime": 2.49060398,
    "bit": 1.16819723,
    "bld": 5.36054413,
    "blur": 1.69464975,
    "blz": 3.46480904,
    "bmd": 1.08854773,
    "bnb": 0.0026183197,
    "bnd": 1.45817587,
    "bnt": 1.27363908,
    "bob": 7.51391534,
    "boba": 2.85134364,
    "bond": 0.29600626,
    "bone": 0.96138804,
    "bonk": 35374.26482535,
    "bora": 5.83234208,
    "borg": 4.48438858,
    "brl": 5.3766381,
    "bsd": 1.08854773,
    "bsv": 0.011233514,
    "bsw": 8.29496576,
    "btc": 0.000016537217,
    "btc.b": 0.000016999848,
    "btcb": 0.000016548373,
    "btg": 0.027237854,
    "btn": 90.14188919,
    "btrst": 1.25709353,
    "btt": 628152.09222591,
    "busd": 1.08702678,
    "bwp": 14.91289901,
    "byn": 3.55411558,
    "byr": 35541.15583916,
    "bzd": 2.20361355,
    "c98": 3.0722252,
    "cad": 1.47379671,
    "cake": 0.3484024,
    "canto": 5.47358348,
    "cbeth": 0.00028926653,
    "cdai": 47.54921671,
    "cdf": 3019.46187408,
    "cdt": 3.66303478,
    "celo": 0.97060806,
    "celr": 32.98418421,
    "ceth": 0.015234393,
    "cfg": 1.55095123,
    "cfx": 3.71946179,
    "cgld": 1.09301506,
    "cheel": 0.062585158,
    "chf": 0.96168091,
    "chr": 3.16758608,
    "chz": 7.58157833,
    "ckb": 60.10767362,
    "clp": 1067.37010084,
    "clv": 16.188,
    "cnh": 7.84881231,
    "cny": 7.83551428,
    "comai": 0.45400277,
    "comp": 0.012691859,
    "cop": 4284.31976389,
    "core": 1.65804103,
    "corgiai": 312.2015438,
    "coti": 5.90210355,
    "coval": 47.31173403,
    "cqt": 2.97733082,
    "crc": 557.7377439,
    "cro": 7.34436804,
    "crpt": 21.66653973,
    "crv": 1.35791656,
    "cspr": 25.49558235,
    "ctc": 1.94834402,
    "ctsi": 3.0993395,
    "ctx": 0.49937752,
    "cuc": 1.08854773,
    "cup": 26.08990702,
    "cvc": 8.69523163,
    "cve": 110.27,
    "cvx": 0.20683034,
    "cwbtc": 0.00084620169,
    "cyp": 0.585274,
    "czk": 25.37385166,
    "dag": 18.21182107,
    "dai": 1.08875102,
    "dao": 1.04996872,
    "dar": 5.71466142,
    "dash": 0.029566646,
    "dcr": 0.046033393,
    "ddx": 17.62136989,
    "dem": 1.95583,
    "deso": 0.028922503,
    "dexe": 0.16737455,
    "dext": 1.14251246,
    "dfi": 10.72442731,
    "dia": 2.05524552,
    "dimo": 2.29395663,
    "djf": 193.42443024,
    "dkk": 7.45448127,
    "dnt": 30.97135135,
    "doge": 6.87538381,
    "dop": 63.99344056,
    "dora": 8.42861366,
    "dot": 0.11067485,
    "drep": 3.81119956,
    "dydx": 0.27321602,
    "dym": 0.18856413,
    "dyp": 3.83385748,
    "dzd": 146.49380942,
    "edu": 1.29958035,
    "edum": 1.06500915,
    "eek": 15.64664,
    "egld": 0.017827466,
    "egp": 53.85182366,
    "ela": 0.31892281,
    "elf": 1.69741859,
    "elg": 1.39810375,
    "enj": 2.10779046,
    "ens": 0.042978405,
    "eos": 1.09060856,
    "ern": 16.328216,
    "esp": 166.386,
    "etb": 61.70305884,
    "etc": 0.030164472,
    "eth": 0.00028936897,
    "eth2": 0.0003058016,
    "ethdydx": 0.2989419,
    "ethw": 0.26967996,
    "ethx": 0.00030366329,
    "eur": 1,
    "euroc": 1.0000395,
    "ever": 21.18097495,
    "farm": 0.022923626,
    "fdusd": 1.08639182,
    "fei": 1.11707984,
    "fet": 0.62634083,
    "fida": 2.84240992,
    "fil": 0.11957309,
    "fim": 5.94573,
    "fis": 1.92850841,
    "fjd": 2.43966196,
    "fkp": 0.85539549,
    "floki": 9341.33737252,
    "flow": 0.97720627,
    "flr": 28.10623006,
    "flux": 1.12766108,
    "fnsa": 0.032343151,
    "fort": 5.57849347,
    "forth": 0.25585029,
    "fox": 13.6764196,
    "frax": 1.09254207,
    "frf": 6.55957,
    "frxeth": 0.0003096922,
    "ftm": 1.62045081,
    "ftn": 0.61608344,
    "ftt": 0.42179745,
    "fx": 6.79976889,
    "fxs": 0.13953416,
    "gaj": 170.96425373,
    "gal": 0.37212203,
    "gala": 27.13001477,
    "gas": 0.1604614,
    "gbp": 0.85539549,
    "gel": 2.88999168,
    "gfi": 0.86671948,
    "ggp": 0.85539549,
    "ghc": 138772.88242901,
    "ghs": 13.87728824,
    "ghst": 1.06572981,
    "gip": 0.85539549,
    "glm": 1.93794927,
    "glmr": 2.41996874,
    "gmd": 73.95401121,
    "gmt": 3.69846441,
    "gmx": 0.020995475,
    "gnf": 9351.98613713,
    "gno": 0.0027796099,
    "gns": 0.19132828,
    "gnt": 1.93360092,
    "gods": 3.01889299,
    "grd": 340.75,
    "grt": 3.79543079,
    "gst": 10.84624466,
    "gt": 0.21303515,
    "gtc": 0.54161343,
    "gtq": 8.49489111,
    "gusd": 1.09053986,
    "gxc": 0.4566383,
    "gyd": 227.42725121,
    "gyen": 164.79609446,
    "hbar": 9.24935279,
    "hbtc": 0.000054811598,
    "hft": 2.51418707,
    "high": 0.58434944,
    "hkd": 8.51717764,
    "hnl": 26.86360728,
    "hnt": 0.13560045,
    "honey": 5.34434462,
    "hopr": 6.84896508,
    "hot": 302.52637975,
    "hrk": 7.5345,
    "ht": 0.94752317,
    "htg": 144.28890853,
    "huf": 393.27873061,
    "icp": 0.07811162,
    "icx": 3.6994426,
    "id": 1.85284154,
    "idex": 15.30067463,
    "idr": 17061.6601002,
    "iep": 0.787564,
    "ils": 3.90523472,
    "ilv": 0.0099442156,
    "imp": 0.85539549,
    "imx": 0.37133503,
    "index": 0.27736127,
    "inj": 0.029649173,
    "inr": 90.14188919,
    "inv": 0.027352839,
    "iost": 98.43116795,
    "iota": 3.22235458,
    "iotx": 19.51147952,
    "iqd": 1425.25728321,
    "irr": 45761.57795008,
    "isk": 148.90342554,
    "itl": 1936.27000002,
    "jasmy": 48.82901996,
    "jep": 0.85539549,
    "jmd": 169.32969424,
    "jod": 0.77178034,
    "joe": 2.14989634,
    "jpy": 162.6712825,
    "jst": 27.34997361,
    "jto": 0.42174215,
    "jup": 759.95653535,
    "kas": 7.42812668,
    "kava": 1.21537475,
    "kcs": 0.082783492,
    "kda": 0.64501349,
    "keep": 7.22055449,
    "kes": 155.64335965,
    "kgs": 97.35043216,
    "khr": 4422.51211454,
    "klay": 4.1228247,
    "kmf": 491.96775,
    "knc": 1.38779402,
    "kpw": 979.68588359,
    "krl": 2.16473056,
    "krw": 1450.11700929,
    "ksm": 0.021618276,
    "kub": 0.39069229,
    "kuji": 0.27192629,
    "kwd": 0.33483983,
    "kyd": 0.89329043,
    "kzt": 487.41219178,
    "lak": 22654.63794367,
    "lbp": 98028.23792126,
    "lcx": 4.47173136,
    "ldo": 0.33424407,
    "leo": 0.19379637,
    "link": 0.056748142,
    "lit": 0.83529732,
    "lkr": 335.18388673,
    "loka": 3.40840013,
    "loom": 10.73472857,
    "lpt": 0.082692214,
    "lqty": 0.65914447,
    "lrc": 3.22126999,
    "lrd": 209.34162657,
    "lseth": 0.00029475202,
    "lsk": 0.4026929,
    "lsl": 20.50323403,
    "ltc": 0.013214843,
    "ltl": 3.4528,
    "luf": 40.3399,
    "luna": 1.61303297,
    "lunc": 5528.75998323,
    "lusd": 1.08936367,
    "lvl": 0.7028,
    "lyd": 5.25337742,
    "lyx": 0.16470265,
    "lyxe": 0.16922275,
    "mad": 10.90377562,
    "magic": 0.89707305,
    "mana": 1.7656544,
    "manta": 0.38813388,
    "mask": 0.24798246,
    "math": 5.16311596,
    "matic": 1.03071168,
    "mav": 1.82488679,
    "mavia": 0.19459894,
    "mbx": 1.3367339,
    "mco2": 1.6799302,
    "mdl": 19.31208224,
    "mdt": 13.7437571,
    "media": 0.061505254,
    "meme": 28.03565843,
    "meth": 0.00029830227,
    "metis": 0.01138867,
    "mga": 4888.32288303,
    "mgf": 24441.61441515,
    "mina": 0.8837794,
    "mir": 10.61870916,
    "mkd": 61.69089623,
    "mkr": 0.0005304915,
    "mkusd": 1.10482443,
    "mln": 0.050906851,
    "mmk": 2284.08931149,
    "mnde": 4.66208299,
    "mnt": 3697.25840427,
    "mobile": 316.74221705,
    "mog": 1576876.7739651,
    "mona": 0.0051634321,
    "mop": 8.77269297,
    "movr": 0.048697003,
    "mpl": 0.063681954,
    "mro": 433.07221135,
    "mru": 43.30722114,
    "msol": 0.0074090108,
    "mtl": 0.4293,
    "mubi": 7.22699412,
    "multi": 2.20002413,
    "mur": 49.84946905,
    "muse": 0.07748073,
    "mvr": 16.76062422,
    "mwk": 1831.44115175,
    "mx": 0.3688392,
    "mxc": 63.20648036,
    "mxn": 18.36615873,
    "mxv": 2.26650387,
    "myr": 5.15138535,
    "mzm": 69535.48343671,
    "mzn": 69.53548344,
    "nad": 20.50323403,
    "nct": 62.31499714,
    "near": 0.24112257,
    "neo": 0.067002101,
    "neon": 0.7446885,
    "nest": 273.44433082,
    "nexo": 0.76047509,
    "nft": 1751306.38174522,
    "ngn": 1703.17520471,
    "nio": 39.99601713,
    "nkn": 8.05507214,
    "nlg": 2.20371,
    "nmr": 0.03277071,
    "nok": 11.45487454,
    "nos": 0.21426939,
    "npr": 144.29462911,
    "ntrn": 0.80876296,
    "nu": 11.04226208,
    "nxm": 0.014659467,
    "nzd": 1.77973297,
    "oas": 9.37265743,
    "ocean": 1.13982096,
    "ogn": 5.69403735,
    "ohm": 0.091859695,
    "okb": 0.0200224,
    "okt": 0.053196619,
    "olas": 0.2110004,
    "om": 3.54164587,
    "omg": 1.0428888,
    "omi": 1124.08860477,
    "omr": 0.41907378,
    "ondo": 2.11893065,
    "one": 35.82907357,
    "ont": 3.55565671,
    "ooki": 452.81329285,
    "op": 0.24199559,
    "orca": 0.23194695,
    "ordi": 0.014770695,
    "orn": 0.65600663,
    "osmo": 0.70787632,
    "ox": 73.3718283,
    "oxt": 7.97248627,
    "paal": 2.07354755,
    "pab": 1.08854773,
    "pandora": 0.000057982548,
    "pax": 1.09626202,
    "paxg": 0.00051925084,
    "pen": 4.0639418,
    "pendle": 0.3849769,
    "people": 25.61661867,
    "pepe": 147673.01843915,
    "perp": 0.76925028,
    "pgk": 4.09383473,
    "php": 60.76358021,
    "pixel": 1.98964925,
    "pkr": 303.98834966,
    "pla": 3.96059132,
    "pln": 4.30183965,
    "plu": 0.21493445,
    "png": 2.73903461,
    "pokt": 5.8251346,
    "pols": 1.02441235,
    "poly": 8.65491926,
    "polyx": 5.10569694,
    "pond": 39.17391148,
    "pork": 2002855.04759346,
    "portal": 0.53015523,
    "powr": 3.12828448,
    "prime": 0.075317767,
    "pro": 2.04574462,
    "prom": 0.10710115,
    "prq": 7.62355042,
    "pte": 200.482,
    "pundix": 1.63656494,
    "pyg": 7943.19043784,
    "pyr": 0.14764264,
    "pyth": 1.81746313,
    "pyusd": 1.08950916,
    "qar": 3.96231375,
    "qi": 52.16805635,
    "qnt": 0.0092076643,
    "qsp": 219.20293524,
    "qtum": 0.23078274,
    "quick": 0.013965791,
    "rad": 0.50517077,
    "rai": 0.38741744,
    "rare": 8.0253815,
    "rari": 0.62745994,
    "ray": 0.92451457,
    "rbn": 1.44156757,
    "ren": 13.61904042,
    "render": 0.15747765,
    "rep": 0.84247043,
    "repv2": 0.84247043,
    "req": 9.34056628,
    "reth": 0.00027815469,
    "rgt": 2.20865546,
    "rif": 5.01818393,
    "rlb": 8.09867091,
    "rlc": 0.32645905,
    "rly": 105.0044873,
    "rndr": 0.14211346,
    "rol": 49711.6876494,
    "ron": 4.97116876,
    "rose": 7.12276237,
    "rpl": 0.031881683,
    "rsd": 117.21490319,
    "rub": 98.90207445,
    "rune": 0.21199739,
    "rvn": 41.14129766,
    "rwf": 1396.46922403,
    "sand": 1.71215047,
    "sar": 4.082054,
    "sats": 1762777.91574591,
    "savax": 0.024296513,
    "sbd": 9.05337555,
    "sc": 123.21237656,
    "scr": 14.54429833,
    "sdd": 65415.70794472,
    "sdg": 654.15707945,
    "seam": 0.23264834,
    "sei": 1.50541796,
    "sek": 11.24233239,
    "sfp": 1.50094971,
    "sfrxeth": 0.0002855044,
    "sfund": 0.27017591,
    "sgb": 74.70952808,
    "sgd": 1.45817587,
    "shdw": 56.08028513,
    "shib": 32139.73446368,
    "shp": 0.85539549,
    "shping": 115.45688832,
    "sit": 239.64,
    "skk": 30.126,
    "skl": 10.94113568,
    "sle": 24.70709085,
    "sll": 24707.09084876,
    "slp": 190.2865159,
    "snt": 23.70375165,
    "snx": 0.26155408,
    "sol": 0.0086308231,
    "sos": 621.13793102,
    "spa": 76.80021164,
    "spell": 866.30565392,
    "spl": 0.18142462,
    "srd": 38.42031672,
    "srg": 38420.31672014,
    "ssp": 1701.48804499,
    "ssv": 0.03196102,
    "std": 24598.75996007,
    "steth": 0.00030645543,
    "stg": 1.68367156,
    "stn": 24.59875996,
    "storj": 1.49037306,
    "strax": 0.6902312,
    "strd": 0.25675921,
    "strk": 0.48180704,
    "stsol": 0.0074009321,
    "stx": 0.40670384,
    "sui": 0.77456711,
    "suku": 9.16366162,
    "super": 0.72982958,
    "sushi": 0.64117027,
    "svc": 9.52479267,
    "sweth": 0.00029931941,
    "swftc": 181.28942548,
    "sxp": 2.53413403,
    "sylo": 390.41282296,
    "syn": 0.70212383,
    "syp": 14153.13993663,
    "szl": 20.50323403,
    "t": 35.12884802,
    "tao": 0.0015981582,
    "tet": 0.032962167,
    "tfuel": 12.33009873,
    "thb": 38.8124432,
    "theta": 0.37729514,
    "tia": 0.069847491,
    "time": 0.044864743,
    "tjs": 11.90615297,
    "tkx": 0.071092097,
    "tmm": 19013.97613872,
    "tmt": 3.80279523,
    "tnd": 3.38504314,
    "ton": 0.40766838,
    "tone": 823.18779355,
    "top": 2.58520307,
    "topia": 14.64967432,
    "tor": 0.16442494,
    "trac": 0.91336773,
    "trb": 0.011075827,
    "tribe": 2.65960579,
    "trl": 34564776.52859849,
    "tru": 15.51878831,
    "trump": 0.11684396,
    "trx": 7.94506387,
    "try": 34.56477653,
    "ttd": 7.37967172,
    "ttt": 265.0872523,
    "tusd": 1.08846491,
    "tvd": 1.66212076,
    "tvk": 6.85133579,
    "twd": 34.33283902,
    "twt": 0.79201352,
    "tzs": 2770.19418349,
    "uah": 41.77933789,
    "ugx": 4265.1719067,
    "uma": 0.28000077,
    "unfi": 0.15496698,
    "uni": 0.067232942,
    "uos": 4.57980604,
    "upi": 2003.09271178,
    "uqc": 0.1169957,
    "usd": 1.08854773,
    "usdc": 1.08865716,
    "usdd": 1.0883255,
    "usde": 1.08751576,
    "usdp": 1.08902377,
    "usdt": 1.08800575,
    "ust": 29.51638465,
    "ustc": 29.49747699,
    "uyu": 42.46277615,
    "uzs": 13620.04153312,
    "val": 1936.27000002,
    "vara": 12.05050919,
    "veb": 3928107978.794574,
    "ved": 39.28238876,
    "vef": 3928238.87595673,
    "velo": 12.68592903,
    "ves": 39.28238876,
    "vet": 24.51821268,
    "vgx": 8.88129974,
    "vnd": 26783.27849324,
    "vnst": 28129.7818418,
    "voxel": 3.85360354,
    "vr": 26.89300682,
    "vtho": 248.94648982,
    "vuv": 131.40378934,
    "wampl": 0.077181354,
    "waves": 0.35206713,
    "waxl": 0.52440714,
    "waxp": 14.24893686,
    "wbeth": 0.00029728075,
    "wbt": 0.13019507,
    "wbtc": 0.000016489712,
    "wcfg": 1.55742918,
    "wemix": 0.43831453,
    "whrh": 39711.50996089,
    "wif": 0.70564329,
    "wld": 0.16878281,
    "wluna": 17222.54810478,
    "woo": 2.04358935,
    "wst": 3.00174024,
    "xaf": 655.95700001,
    "xag": 0.045395403,
    "xai": 0.92409905,
    "xau": 0.00050858757,
    "xaut": 0.00050978749,
    "xbt": 0.000016537217,
    "xcd": 2.93999722,
    "xch": 0.022073654,
    "xcn": 487.0885906,
    "xdc": 25.17696513,
    "xdr": 0.81822325,
    "xec": 16900.25049043,
    "xem": 22.25507999,
    "xlm": 8.25478451,
    "xmon": 0.0011572713,
    "xmr": 0.007539323,
    "xof": 655.95700001,
    "xpd": 0.0010647275,
    "xpf": 119.33174224,
    "xpt": 0.0012090376,
    "xrd": 26.50712791,
    "xrp": 1.84118211,
    "xtz": 0.82622216,
    "xvs": 0.092520305,
    "xyo": 115.07854123,
    "yer": 272.34457727,
    "yfi": 0.00011615085,
    "yfii": 0.0016480003,
    "zar": 20.50323403,
    "zec": 0.035723346,
    "zen": 0.098031787,
    "zeta": 0.56544071,
    "zil": 30.25505297,
    "zmk": 26091.13002836,
    "zmw": 26.09113003,
    "zrx": 2.68257602,
    "zwd": 393.94542475,
    "zwl": 17337.15683507
}