export const Icon = {
	error: (
		<svg fill='currentColor' width='144' height='144' viewBox='0 0 144 144'>
			<rect width='144' height='144' fill='url(#pattern0)' />
			<defs>
				<pattern id='pattern0' patternContentUnits='objectBoundingBox' width='1' height='1'>
					<use xlinkHref='#image0_1_4693' transform='scale(0.00195312)' />
				</pattern>
				<image
					id='image0_1_4693'
					width='512'
					height='512'
					xlinkHref='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIAEAYAAACk6Ai5AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAABgAAAAYADwa0LPAAAAB3RJTUUH5gsDByovqFkrNAAAQf1JREFUeNrt3Xd8VuXhN/77ziYJARKm7BUgIMhQUFScVamKA/HrqHWAOKtV67YW67bWbRniqKMVlda9qhZcOEBR9pCNBAiEEEJC1u+Pvu6n39/j06oIXAnn/f6nf1S9PufK6z7nuj/3OdeJxQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOC74qEDAOxsk54tmFQwKS1tY3H1G6ljBw9O61J7W9V7+++feW3FmopuAwZkNa58rPzvXbpknlbRs2JT8+apx1X1q2qfkZHWrub56vEpKSlTqz+o+Tg5OWNe1Rfb3k9JSe9XVVZVFo8nJ9fU1NSEPjqA6KmuTkpKSorFKmakZKZk1taWd0/pm3ZAVVXVgcn7J+1bXb3tyeTLk6+prKzcmPy3lBkVFWVPp89Ob7R2bellqfekNV64cGtK+toGraZPr3w+6c34i1OnNj4oKaOm/OOPR5w8Z8ScEdu2hT4+gJ1FAQDUe+PG9e/fv3+rVmnnFn9e+vno0Y2Hlr9XftvPf9683+blm/oWFDQ/s/TszUdnZqak1NRUV4dOC0BdU1WVlJScHIutu6ThWw0/2rKlsDY7qdE7c+cWlza4M2vGK69suiLjgIYnjB176bBZ131yamFh6LwA20sBANQbE+7MX77nL4YNy/1nWe3mK664ovn5pVmbCvr0adVjU7NN6Q0bJifX1vpFHoAdrbo6Hk9KisVWT2u0rknG5s1r9825uOHmL79c36ThkqzBd911Xu7sabOnvfxy6JwA30cBANQ548b1XN6/f+fODZdufa7kt7/7XZu1G3694eJjj217fXFS0fKcnND5AOB/W3dZ9jk5l1dULF2a+8dmr7/77reHZH6SddaVV15y97yfffWbWbNC5wNIUAAAwU18LX9hz4svvbTdkg1t1r939dUdj9iQtW5OixaesQegPkrsUbD0jrzsZoeuWbN8Ye5NzUpuu+3sf86/dNYn998fOh8QXQoAYJcbf2/+Uz2vvuCCrqvWP1249eabO1yw4fX19zVpEjoXAOxMK25uXJPXrqTkmwXNOjdfd//9S6YuXDJ36403jonHYrGYyhvY+RQAwE73xLKuT/c4//bbuz5TWPntsRdf3Op/Ss4sPiozM3QuAAhp9SM5jzd+vaxsfrPmz7ccfd99Z1+66JV5y6+9NnQuYPelAAB2uLGzC9L3nH/oofnTCx9cU/zXv3Y8oGjUuoFNm4bOBQB12bKi3L2bnlJcPK9Tq+QWS844w+aCwI6mAAB+sj8OKpg0aEVubtuPNz9XeNnkyXstWvXC8slDhnjtHgD8eIk9BGaf0apJm6kzZy65qsllrZYfcYTXEAI/lQIA2G6PPp/frOC4a67pe8bKtsvW3HRT49llM7ZMS0kJnQsAdicb8zP7ZQ2qqprZs82tHWZcf/1ZXy44cva2O+4InQuofxQAwA92Y2372iG1GRm9YjUjlo94443+S1Y+v/T5IUPi8dra2trQ6QBg95a41n59euu8dh/MnDnjw5Ydml2y335j4tOnT59eVhY6H1D3KQCA7/XQ2z2v3uuYvffe89zV41asfvvttu9u3Fg0vVGj0LkAIMpWHJLbKa//pk2zftM6q33toYdecMHXX8+YMX166FxA3ZUUOgBQdz26tWuPHkOvv/6gDxZNnDtt2jRf/AGg7mj77oZviqY3anTg6gVr5qz+9NPEo3mhcwF1lzsAgO94ckynyV2rJkzY97QlJy5OGzkyObm21tuJAaBuq6mJx+PxWOzjaztO7bLuySdPf/abAxY2PeOM0LmAukMBAPwff3mjwxldPp48eWD+0j8v2vf44+POEABQ7yT2Cpjese1JHU+aMuWk+Irnljx30EGhcwHhWd5DhN1YG4vFYklJfbu3XtZ+8rRpfd5Y1X7ZCXvvHToXALDjfP1w67y2d8yc2fDOLus7XTlgwMHxKfEp8aqq0LmAXU8BABH0Xu2Q2iG1KSnlafOHL3x6/vzuC9a8sPr0Tp1C59pVtkxMb5bRsqZm7cXZv244buPG0j9k3J0xb+XKLd3TLmtwz7x5Wx5Ouy315zNmVH0UvyP514sWJV0aa1jzTVFR/J20wswJy5dv613VvvQX69Zd+PycEXNGlJaGPh6AqHloeMGkgknZ2WlfpSzLfrJZs9pDt7UoG9WuXc29sc1JnfLyUvarvar6ni5dsi7Ydk3lq/36Zc3b9setv+7ePfuK8svLu7dp0/yB0ns2j27SJOucinXla5IisyfW3JktL9nj/cWLGwzrdm/X/bt3VwRA9CgAIIJe3K91XrsPvvyy99Oripbv36dP6Dw72rZtycnJybHY8n80KW3ao7Cw6KnsgQ3P/fjj4m7plzbo8vTT3z42/+yvh06ePCYei8VidjcAiJrEHXCtzur26J6vnXBC4/kV925ddNppTa8s/WTz+H33bVuwMXv93BYt0tKqq6urQ6fd8Wb+qfWI9k2++OK4O1dNWraxX7/QeYBdRwEAEfJcu3ZtO+379tsDpixf8c3Hhx0WOs+OsvqRnMcbv15WtvyA3HebNn7zzU2/bdA19R9XXXXep3NvmHvDwoWh8wFQvzzcpFfnAWVt2zb8dmus5Jbrr297dPGxGzKHD283vuie9dfl5u4ue+R8urjdhE7T3nzz5MOWj/pm0JFHhs4D7Hy7yekL+G+e/KjjyPweTzwxuOWSRxbMPeOM+rpwqapKSkpOjsXmX9TyV61mz5mz6oSGJXkXXHTR6NHzH5357nvvhc4HwO5t7OyC9D3nH3po6/HFQzcueuCB7hetefHbY3v0SEmpqamPdwokNgv8aGanA7p1evTR04//5v3535xzTuhcwM5TT78GAD/Eo1u79ugx9Prrh6xeNG/e67//fVJSbW3iYl8fJG7ln7tfyyvb7D1jxreX5JzQePrIkef/du7eMyu/+CJ0PgCi7eGH99yzX7/+/fdYuqFH0ZIJE3qcs+aFlSV9+9a3Rweqq+PxpKRYbOqXXZt2P/baa88evmDdnL/fdlvoXMCOpwCA3dBDb/e8eq9j9t77oA8WTZw7bdq0zDMr1lWsqz+bHC3+sunWFr0KCxc1b3Zi8yEjRpw3eO5rXz80dWroXADw34w/v/ufe700ZEjHq9YfuO7MSZO61K7vULihefPQuX6oxCa5U/fIb1mwxz77XHDB11/PmDF9euhcwI6jAIDdyI217WuH1GZkHDpyU+2s9oWFba8vTipanpMTOtf32bRXgz0z+1VVzRjTun279Xfddfali16Zt/zaa0PnAoCf4ollXZ/ucf7tt/f55cobl713xRWNHtu6qGxecnLoXN9neSx376anFBcXftryN82Pb9FixMlzRswZsW1b6FzAT6cAgN3IC5PaPtyhx8cf99t7xQVL5w4aFDrP91l8a7OcFoevWbN4QPNZbTbsv//o0bPbTZ++eHHoXACwIyU2Fey0bO2FK+d/9FG3orWXrenbpk3oXN9nxoVtlnWY+cEHJ762sv3SPgccEDoP8NMpAGA38Ojz+c0KjrvmmoP6LVw/98Vbb43H6+az/tXVSUlJSbHYZ4vand7pw7/9bd4RS/+8aN/hw72OD4AoSLx+sMdb7Ws7rZk8eUDnFclL9xg2LDm5pqYuXgVra+PxeDwWe/ek/KyCs6+6auT0+aWzJ955Z+hcwParN88EA981bmz/fv37NW3a94yVbZetuemmuvrFv+yztOy07Nrad1/p8uceV1544SlHLv3zon1POMEXfwCiJHHd+58jlsW/aXnccVOy8if1yLnooq3TUzPTsuveFTyxruj72Iq+y1bffPMfBxVMGrQiNzd0LmD7KQCgHsvbv3Bk0dAXX2w8u2zGlmkpKaHz/N9KHsxo2aB1Tc3Hm7q07dbh5JPPvXTB6bNvf/jh0LkAoC44p9W84bOLH3row286zut2/PHHl4xq0CWze917f0Buw7L3S19PTW23T+ncwsP/9rfQeYDt5xEAqIfG7tPj973Khw497Jn5N87JfPXVunbrYFFR1qHZR1VWTv+8/ehOTx9yyOjz5oz4KveDD0LnAoC6bNzYgkm9N+y/f/8By8Z9c9q77+blbXmn9PXU1NC5EqqqkpKSk2Oxdw7Jn77noJ/97LwV8/p++eHbb4fOBfxw7gCAeqhbReH8NXc/+WRd++JfMiqjQ4Mu1dW++APAj5e4bn6yscPeXVIGD950Vt26IyAlpaamujoW67Z83eurrvzLX0LnAX48BQDUI4nXCXX4+4an1l9Xd57BSzzjP+2kjtd0/uvw4b74A8D2u/Dw2bd/+fJnn017s/2vuzw/YkRd2yOgw9Kia9cNy8t7fGuX+QWTbr45dB7gh1MAQD2Q2DW46zOFld8ee/HFofMkJHb1/3B1h7FdL7rootGj546eNeDvfw+dCwB2B+elz7vwq16TJ388udOKLvtdckniultX5J+4bsXq9pdeGjoH8MPVoVMI8J90OLDLkQXDb7ih1f+UnFl8VGZm6DwJidf52dwPAHaec56ZnzfnrQcemD6vfW7HkpdfDp0nodVDmw4rHpiVlXgdceg8wPezCSDUA1PPaVyT127TprbXFycVLc/JCZ1n8ZdNt7boVVj4/nHrGxTO2mMPr/NjdzRuXI9xvT4/7rgWQ0oe2bT8xhtb/bpkn00f9ujR6J6t48ruS09PT6+qqqoKnTK6KipSUlJSYrFNv24wOvOSiopv78n5tNHguXMLp+SMbNRuzBh3JLE7StwROLimWdeW169c2XX5uoVrbm7VKnSuFR82Xp+XuXnzgacXNy0qC79OAf4zBQDUYRNfy1/Y8+JLLz2kx4Kusx+4557QeTbt1WDPzH5VVZ+16HpGr9b5+aMWfPWbT19esiR0LtgRHhpeMKlgUnZ229Ti9M1XfPxxr1u+PW7lil69Eu/Bpn6oqYnH4/FYbPbWVpvaPvrVVyt+1/iN7KzBgy98fs6IOSNKS0Pngx1h3Liey/v379x50HPfHDJ3y/z5ORO2Liqbl5wcOte713UrKvjZr36VuGMhdB7guzwCAHVYuyUb2qx/7+qrQ+dImDGmdft26++6yxd/dieJL/4FHdc8tvbD5cv3vHX1sBXLffGvr5KS/vV32zNrdc7ys3r3Lli45qW1C5ctS/ydQ+eDHWH06Nntpk9fvHjm9NYvtjs9/A8ECe02buhYVHvttaFzAP+ZAgDqoPuPLJi019SCgo5HbMhaN6dFi9B5vnk+b0KzT9avP/vSRa/MW+7Czu4l8Yt/hws2vL7+viZNQudhx0q8NaVtx03nb17i7STsXs7YuKjnvOt/85tF8aZLW+SuXRs6T8cHikrXvdOy5bhx+ef2+rx799B5gO9SAEAd1OzSsldKU2++OTm5pibkk/XbtiUnJyfHYgv3a/63ln8+8cTQ8wI7UuIZ/543/+tW/9B52Ll6nrd6w8qr+/SZcGf+8j1/MWxY6DywIy3e0rxb849PPbWy8l/X7VAS65acuyvfKj/5pptCzwvwXQoAqIPaf7HhkPXFRxwROsecOS3Htjl9+vTzBs997euHpk4NnQd2pJZPlFxbUv673yVuGWf3lvg7N7tjy59KFv72t6HzwI50Xs85FV93e+edeRNaNt7j1pkzQ+dpm7XhkaKXhg4NnQP4LgUA1CFjN/Qc1HPQMceEft1fVVVSUnJyLPbtt7n35309enToeYGdoVWLTccV/80tqlGzR3pJbOPQgoLQOWBnWPGzxqPyPhg1qro6KSkp4Cq/9eRNh23smZU1dp8ev+9VrgiAukQBAHVIs9M3Pbtl3JVXhs4x/6KWv2o1e86cCy74+usZM6ZPD50HdoZGZ5U/XfZQWlroHOxaOQ9vvWfr7enpoXPAznDh4bNv//Llzz6b175F7R73zZsXOk/eJ6VfbflF+HUN8G8KAKhDmp9fmrWpoE+fUOMnboNedULDkrwLLroo9HzAzlRbE4vFXQUjyF+d3d/KBU3SmvzsootCP97UYuTmZ0s+6ds39HwA/+YiCHXAuHH9+/fv36pVqx4lzTelN2wYKseKeO7eTU8pLh49ev6jM999773Q8wI7U8kTGac1OH/bttA52LVKLsi4pMHVFRWhc8DOlNgTYOUtjWvy2pWUhMqxxzUlKRtX5uTc+2KvWwY+E/6tRoACAOqEtHOLPy/9fPTo0Lv+r7q10cjchi++GHo+YFdYfVujrxoNnjs3dA52rVUP5XRqsnj27NA5YFdY2Tz3ntwHXnop1Pj/560AP6t4quSpUaNCzwegAIA6ofHQ8vfKb/v5z0ONn3ht0IYhjTdn5d94Y+j5gF2hcErOyEbtxoypqYnH4/HQadjZEn/nwiGNJ2bPHzMmdB7YFYrHZj7c6PBrr0281jeUJiO31pa9evTRoecDUABAndDiwM3LN/UNtyv1sreblDbtUVh40elfXPHFFcuWhZ4P2BVGj547etaAv/999tZWm9o++tVXofOwc836xR65bd+fOfO83NnTZk97+eXQeWBXuGDjrMWfZ65YseKEJh/lla1bFypHi42bH9z0aa9eoecDUABAUJOeLZhUMCktremJW87ZfHS41/4VPZU9sOG5H38cej4ghBW/a/xGdtbgwUuPyz296S0bNoTOw461bFTer5vesmHDjA9bdmh2yX77hc4DIRTd0fDnDSunTQs1ftN7S4/YvF9WVmLdE3o+IMoUABDQxuLqN1LHDh6cmlpdXV0dLkdxt/RLG3R5+unQ8wEhXPj8nBFzRpSWzuna8tjmXdu3//rh1nlt75g506MB9VPi7/bVaa3z2n0wc+Z7b3eY2n5y27Zj4tOnT59eVhY6H4Sw8d30vTL6/uUvocZPrHM2bozFUg7bZ5/Q8wFRpgCAgNKeql5dmXvggaHG3zIxvVlGy5qabx+bf/bXQydPDj0fEFKiCDj2rlVFK67aa693X+i6rNfpxx03c0Dra9oPmjFj3eCG1+TcVF6+7euUjJSM0C/XIvF3SPxdvvyy9YT2v5w+/e0mBQMLBh577LCPVhUt33+vvXzxh1is290t3m664LnntnySlp2eE+78lfrLyhsrTz/ooNDzAVHmtw0I6K9vtq/ttObvfx+Yvyz+Tcthw3b1+Evez5vQ7JP16w85o2jUuoHNmoWeDwBg5/nnYXm/bnpLUVH7CUX3rL8uN3dXjz/t5A53d/795MmnfLr08sU3nHhi6PmAKHIHAASU/cfKX28r7to11Pibx2Zc3aBy1arQ8wAA7HybXks/s8E/wl33szpv67JtQn5+6HmAKFMAQECZp1X0rNjUvHmo8bcWph2U9vD8+aHnAQDY+cpeTGuX0SvcdT9rbUWs/P0WLULPA0SZAgACSm1SfXxVv/T0UOOXNk57M73B9Omh5wEA2Pm2xtPyU1fMmBFq/NQO1cfUHBBu3QMoACCo9NHVd1fflpoaavzqc5Pujp+/YEHoeQAAdr5tr8TvSD534cJQ46c9VX1d1cVeAwghKQAgoNTi6jerX0tJCTV+9dXJd6ZMWbs29DwAALvAqKTnY6+Gu+6n1VS/WfVCuHUPoACAoNIer1pQNSc5OdT4ybfXvpf8TGFh6HkAAHa+qktrOya9s2ZNqPHTr61eUbU4yfcPCMgHEAJK71dVVlkaD/Y6zqq3a6dtvUoBAABRUJNX1S395XAFQNrplUVVGxQAEFKwLx5ALLZkSSwWi9XWhhq/Y8dYLBYLV0AAALue9QdElwYOAAAAIkABAAAAABGgAAAAAIAIUAAAAABABCgAAAAAIAIUAAAAABABCgAAAACIAAUAAAAARIACAAAAACJAAQAAAAARoAAAAACACFAAAAAAQAQoAAAAACACFAAAAAAQAQoAAAAAiAAFAAAAAESAAgAAAAAiQAEAAAAAEaAAAAAAgAhQAAAAAEAEKAAAAAAgAhQAAAAAEAEKAAAAAIgABQAAAABEgAIAAAAAIkABAAAAABGgAAAAAIAIUAAAAABABCgAAAAAIAIUAAAAABABCgAAAACIAAUAAAAARIACAAAAACJAAQAAAAARoAAAAACACFAAAAAAQAQoAAAAACACFAAAAAAQAQoAAAAAiAAFAAAAAESAAgAAAAAiQAEAAAAAEaAAAAAAgAhQAAAAAEAEKAAAAAAgAhQAAAAAEAEKAAAAAIgABQAAAABEgAIAAAAAIkABAAAAABGgAAAAAIAIUAAAAABABCgAAAAAIAIUAAAAABABCgAAAACIAAUAAAAARIACAAAAACJAAQAAAAARoAAAAACACFAAAAAAQAQoAAAAACACFAAAAAAQAQoAAAAAiAAFAAAAAESAAgAAAAAiQAEAAAAAEaAAAAAAgAhQAAAAAEAEKAAAAAAgAhQAAAAAEAEKAAAAAIgABQAAAABEgAIAAAAAIkABAAAAABGgAAAAAIAIUAAAAABABCgAAAAAIAIUAAAAABABCgAAAACIAAUAAAAARIACAAAAACJAAQAAAAARoAAAAACACFAAAAAAQAQoAAAAACACFAAAAAAQAQoAAAAAiAAFAAAAAESAAgAAAAAiQAEAAAAAEaAAAAAAgAhQAAAAAEAEKAAAAAAgAhQAAAAAEAEKAAAAAIgABQAAAABEgAIAAAAAIkABAAAAABGgAAAAAIAIUAAAAABABCgAAAAAIAIUAAAAABABCgAAAACIAAUAAAAARIACAAAAACJAAQAAAAARoAAAAACACFAAAAAAQAQoAAAAACACFAAAAAAQAQoAAAAAiAAFAAAAAESAAgAAAAAiQAEAAAAAEaAAAAAAgAhQAAAAAEAEKAAAAAAgAhQAAAAAEAEKAAAAAIgABQAAAABEgAIAAAAAIkABAAAAABGgAAAAAIAIUAAAAABABCgAAAAAIAIUAAAAABABKaEDAPDfPbxgz9f6HTloUPqiiq4VXQcNSrm6plfVqBYtEv9/dW7yHamjvv22fHxaflqTTz+9IP/roTPemDYtdG6g/nP+Adi9xEMHgChbsiQWi8Vqa0ON37FjLBaLxZ0HAruxtn3tkNqMjI7lqQvWPXf99S1PLVlTPOYXv2jTc9PwDUVt2mSdU7GufE3SD75ja8vE9GYZLWtqVs5u9HyTjStXrnkmp2WTJ598cklGZX6zk26+eUx8WXxKvLw89HED4Tn/RJP1B0SXDx4E5AIcTe/VDqkdUpuSsup/VnywuujRR3u+vOaS1Uefckrj2WUztkxL2Wl3Zm3Mz+yXNaiqat6ZLUa37v30063Gtzu31biRIw+OT4lPiVdVhZ4XYOdz/iEWs/6AKPPBg4BcgKNl7Ic9hu554YEH7jl49e9X3vDqq3ss2dR/Y8vs7FB5VuY1mt5kTWnpnGdaL26bdtRRo8+bM+Kr3A8+CD1PwI7n/MP/Zv0B0WUTQICd7JEHux7R6x+jRw9+5ZvPFr7w3nuhF94JbYr+lWNw40Vnz+8wderE1/IX9rz40ktD5wJ2HOcfAP43zRsEpIHfvT1xTtdW3b+4887B1ywuXND/N79JTq6pqakJneo/q65OSkpKisU+TO38ZLfRd9zxy/YLT5v7p6uvDp0L+PGcf/hvrD8gutwBALCDjb2s+2E9u55yysDfLFm3aO+6v/BOSOQcVP7NGQvGX3XVuHHdL9zzi1/+MnQu4Idz/gHgv1EAAOwg976YX9rrlt699/1q2dIlyU8+mZ5eVVUft7ZKS6uurq6OxQb+Zdmbi0+ZOPG+y7u/1fuuXr1C5wL+M+cfAH4IBQDADlJwdvH49UNffTVnwtZFZfOSk0Pn+akaPfav4+j2zYb0dde/+mroPMB/5vwDwA+hAAD4icbfm/9Uz6svuKDr52svW9O3TZvQeXa0bn9cO+TbinbtJnbtfnfP5qNGhc4D/JvzDwA/hs03ICCb8Owe3l7adGmL3MLCLrXrOxRuaN48dJ6dZdFrTbe26FVYePiF6xsUzmrZMnQewPmH7WP9AdHlDgCA7fTQ2z2v3uuYvffuVF3Uce3G3XfhndDpyKLMtbNbtHhoeMGkPrV77RU6D0SZ8w8A20MBALCdcpeXNSz77PLLk5Jqa8P9jrLrJI6zSdfyFWUvXX556DwQZc4/AGwPBQDAdsrttqVTydf77Rc6xy4/7nmlA0pHHHhg6BwQZc4/AGwPBQDAdmp8y9YPym7f/W+9/c5xv7b1jbKbo3fcUJc4/wCwPWy+AQHZhKd+mzs5NTMtu6Ymo29l2bbS6Mxj2Wdp2WnZtbU9R2wr3VaapEiGAJx/nH9+CusPiC4nToDtlNanamvllugtYNL7VW6pKovecUNd4vwDwPZQAABsp6qqpKTk5NApdr3qOcnpSWlR2HYM6i7nHwC2hwIAYDuV9U3vkz6gqip0jl1ty4lpBel7VVeHzgFR5vwDwPZQAABsp41jG5yfeV9xcegcu/y4D2xwY+azGzeGzgFR5vwDwPZQAABsp6L1WYOy35g1K3SOXX7cJdmPN+zx1Vehc0CUOf8AsD0UAADbqbhbg/ezTv/zn0Pn2NVK9s8Yk3X1o4+GzgFR5vwDwPawiyoE5DU8u4dPj88+J+fy8vJmfyydWHJ3enroPDvL2gsaXphzeUXFwNc3P1Ryd0ZG6DyA8w/bx/oDossdAAA/0fzfNIu3fO3ZZ0Pn2NkWftksq9XGp54KnQP4N+cfAH4MBQDAT7Ro39wvGmaef/66y7LPybm8oiJ0nh0t8cvbwtXVd7SceNFFofMA/+b8A8CPkRI6AEB9NyY+ffr06WVl7b7tfk3PxZdfPmTL/EfnJj34YHJybW1NTeh026+6Oh5PSorFZh20x9Z2Cy+9dEx8fnxKvLw8dC7+/+67vPtbve/q1St3YuXJ2z4599yG08q7bDn1gANyPi0/t7x1mzY5W8pfKX8wJ6dBXuU7FX9LTU3vV1VWVfbvW28rZqRkpmTW1m4tSj00/fjKypKsjKMzLiopKZmV8XbmkStWbG6RMSgja+rUjW+nt2nwzPjxv3pjzogvD5wzJ/Rx8y/OPwD8GJ69gYA8g7d7+stzHTZ2vfi55wYNWNpk4QPDh4fOs72mvdvxlvyWzz57yjlLrluw5n/+J3SeqBs3rufy/v07d865u+zATcW33dY2a8MjRS8NHdp68qbDNvbMytrZ4yfOVN92ajS9yZrS0hWdc2/Nu+y11zZdmXlPo/nXXjt69Ox206cvXhx6nqLO+YcfwvoDossHDwJyAd69vXLEHpe2mTd7ds+xq+9d2b2gIHSeH2rWgD0ubTNvzpxjilbfu7J7z56h80TVn27q8Vmf1L59W91XMrm4/yOPdP+w8K5Vn/frl55eVVVVFTrdv237OiUjJaO2dk51iwdanzxjxuqnGzVq/PjIkRc+P2fEzPiXX4bOF1XOP/w31h8QXT54EJAL8O7txtpYLBZLSuoVa3tSx5PefXfA0hXPLXluyJDQuf6Tr05rndfug5kzcz7ssr7j4AEDDo5PiU+J16Wvmru3G2vb1w6pzcjo/mb8l6umPfNM3/KVk5Ydetxx6X2qyivL6s/ndNu25OSUlFjsq/w9Tmh7/JQpa09qeFKDk44++sLn54yYM6K0NHS+qHD+4b+x/oDo8sGDgFyAo+XJ8s6d868bN27g8qVLF99+7rmpqdXV1dXh8mzblpycnByLffJtu1WdK8eOPeOgJS0XJJ1/fuh5ipqxbbt/sdfgww/v/fTqqUsvfPHFVm1LLik+tUGD0Ll2lNWP5Dze+PWyslntWk1tf9fRR48ePf/Rme++917oXFHj/MP/Zv0B0eWDBwG5AEdT4gtf5/fXN/l27lNPdald36FwQ/Pmu2r8xV823dqiV2HhovzmjZu/cNpp5/WcU/F1t3feCT0vUfPovV2O7t7u1lv367Ds3cXrr746vU9lWX36pf/HKv8iNTMtu7b2k3s6tOhcfcstZ76/cMncrTfcEDpX1Dj/EItZf0CU+eBBQC7AxGKx2IRXuz3ca/FZZ+0xc9P8Dauvu65zwfpx647o1Omn3vpdMTM1MzWztnbxjXk3NZu3ePHKCxovySu6+ebRo+c99HXfJ54IfdxR9eSYTpO7Vk2YsO9pS05cnDZyZH3frf3HqqmJx+PxWOzjaztO7bLuySdPf/abAxY2PeOM0Lmiyvknmqw/ILp88CAgF2D+X26s7d+/f//MzHZrtlxTvvisszJnlr9U8fqhh2a12fbgtnmdO6f2rTmrKjU7O/HPV36R9FhKZWnplpVpF6V1X7y4rE/GselHvfPO8pZZt2V0fuyxxGvCQh9X1D35UceR+T2eeGJwyyWPLJh7xhlR/+QlznzTUjo/3fXQxx47td3i0xa+c/bZoXNFnfNPNFh/QHT54EFALsCw+0vc6j/kmMWvzl9xzTVJSbW14T71dU/ife8fLOvycrdJN9105qELj547/MYbQ+eC3Zn1B0RXUugAALA7Gju7IH3P+YcemnjG3xf//7fEIxCDNi8ZvuiMG24YN7b7fn3u/NnPQucCgN2RAgAAdqDELdS9i1beuWL6yy/v7pv77SiJZ873fOnbm5YNmTw58VrE0LkAYHeiAACAHajgzaLhxd2fe253e53frtLqoU2HFQ/MyurxViy2ovCvfw2dBwB2JwoAANgB/nRTj8/6pPbt26fDyhuWPTt0aOg89d1eW1c1WNHp2GPvfTG/tNctvXuHzgMAuwMFAADsAK3uK5lc3P+RR9LTq6qqqkKnqf8SjwS0b1LWePMJEyaEzgMAuwMFAAD8BOPG9Vzev3/nzt0/LLxr1ef9+oXOs7spKF6Tsqrv3ntPyO991z7H/GvvcABg+ygAAOAnyLm77MBNxbfd5pf/nSNtz6ryqvJ4PHP05t4bbrj11tB5AKA+SwkdAADqs3YtNzyy/pmhQ2Ox2GGxgaHT/NvaCxpemHN5RcWS4rz3m7d//fXNx6e90uCzxx+vejvj2Xjvjz9O/HMph5efXPvVvvs27FPRdstdZ53VaWzRyPV3HXlksz+WTiy5Oz099HEktBu1oWlRu6OPjl0eOgkA1F9eSwQBLVkSi8Vi4d4M/q+bab2eDLbHfZd3f6v3Xb16HXPhvJ999Zuvvw79SaquTkpKSorFPhvavl2njs89l/z7Bnem3Xb66SNOnjNizoht237of2fSswWTCialpVXfXbaiYv5f/rL3M8t/s+TGE05ITq6pqakJd3yJM+Xbb+ef2+vzHj1Gj14wftaAefPCJYL6y/oDossjAACwHXInVp687ZNzzw29hE188f/nyV0ze5x11VWnLFiydNHiESN+7Bf/hMS/d8qnSy9ffMOJJ74/vMtrPVKuvjoxTiiJec64uXp09ZmjR4dLAgD1lwIAALZDw2nlXbacesABoXMkfvEfOX1+6eyJd965o//7Z3254MjZ2+6447NF7U7v9OHf/hb6eBuVlT9fln3ggaFzAEB9pAAAgO3Q8OXyc8tbt2kTavzEM/6JW/139njzjqh9ovWgU09dd1n2OTmXV1SEOu7slhXHbZ3Stm2o8QGgPlMAAMB2aHRw+V+3/q5Ro1DjJzb3295b/X+sMfFl8Snx8vIlq/N+1fzVN98MddyNn9h6bdlxjRuHGh8A6jMFAABsh4xFlZ9UfpgS7G06xa9mZaY/8+iju3zcszOnZTz12GOhjrvBy1VfVX6enBxqfACozxQAALAdMgZUlVWWhtsCsPz9+DHZv/r0010/cub49NGffBLquNNOryyq2hByO0IAqL+8fgMC8hoeqL/m/T0lIzWzpia9T1V5Zdmu+xxVzEzNTM2sre1+XGVZZVm4L8JRP36oz6w/ILpcOAFgO5Q8kXFag/N3/rP33xn3goxLGlwdbhM+xw8A9ZcCAAC2w+rbGn3VaPDcubt63FUP5XRqsnj2bMcPAPxYCgAA2A6FU3JGNmo3ZkxNTTy+K25kTYxTOKTxxOz5Y8Y4fgDgx/LsDQTkGTyo/16atUdJu8dmztwza3XO8rN6995Z43x1Wuu8dh/MnDnso1VFy/ffa6/Qx+34of6y/oDocgcAAPwEK37X+I3srMGDlx6Xe3rTWzZs2NH//WWj8n7d9JYNG2Z82LJDs0v22y/08Tp+AKi/FAAA8BNc+PycEXNGlJbO6dry2OZd27f/+uHWeW3vmDlze2+NT/x7iV+833u7w9T2k9u2HROfPn369LKy0Mfr+AGg/nLrDQTkFjzYfU24M3/5nr8YNqzZHVv+VLLwt7/dI70ktnFoQUGjsVvvKbs1PT3xz206r8GvM6+tqEhsbpd4xv283NnTZk97+eXQx+H4Yfdj/QHR5YMHAbkAAwC7mvUHRJdHAAAAACACFAAAAAAQAQoAAAAAiAAFAAAAAESAAgAAAAAiQAEAAAAAEaAAAAAAgAhQAAAAAEAEKAAAAAAgAhQAAAAAEAEKAAAAAIgABQAAAABEgAIAAAAAIkABAAAAABGgAAAAAIAIUAAAAABABCgAAAAAIAIUAAAAABABCgAAAACIAAUAAAAARIACAAAAACJAAQAAAAARoAAAAACACFAAAAAAQAQoAAAAACACFAAAAAAQAQoAAAAAiAAFAAAAAESAAgAAAAAiQAEAAAAAEaAAAAAAgAhQAAAAAEAEKAAAAAAgAhQAAAAAEAEKAAAAAIgABQAAAABEgAIAAAAAIkABAAAAABGgAAAAAIAIUAAAAABABCgAAAAAIAIUAAAAABABCgAAAACIAAUAAAAARIACAAAAACJAAQAAAAARoAAAAACACFAAAAAAQAQoAAAAACACFAAAAAAQAQoAAAAAiAAFAAAAAESAAgAAAAAiQAEAAAAAEaAAAAAAgAhQAAAAAEAEKAAAAAAgAhQAAAAAEAEKAAAAAIgABQAAAABEgAIAAAAAIkABAAAAABGgAAAAAIAIUAAAAABABCgAAAAAIAIUAAAAABABCgAAAACIAAUAAAAARIACAAAAACJAAQAAAAARoAAAAACACFAAAAAAQAQoAAAAACACFAAAAAAQAQoAAAAAiAAFAAAAAESAAgAAAAAiQAEAAAAAEaAAAAAAgAhQAAAAAEAEKAAAAAAgAhQAAAAAEAEKAAAAAIgABQAAAABEgAIAAAAAIkABAAAAABGgAAAAAIAIUAAAAABABCgAAAAAIAIUAAAAABABCgAAAACIAAUAAAAARIACAAAAACJAAQAAAAARoAAAAACACFAAAAAAQAQoAAAAACACFAAAAAAQAQoAAAAAiAAFAAAAAESAAgAAAAAiQAEAAAAAEaAAAAAAgAhQAAAAAEAEKAAAAAAgAhQAAAAAEAEKAAAAAIgABQAAAABEgAIAAAAAIkABAAAAABGgAAAAAIAIUAAAAABABCgAAAAAIAIUAAAAABABCgAAAACIAAUAAAAARIACAAAAACJAAQAAAAARoAAAAACACFAAAAAAQAQoAAAAACACFAAAAAAQAQoAAAAAiAAFAAAAAESAAgAAAAAiQAEAAAAAEaAAAAAAgAhQAAAAAEAEKAAAAAAgAhQAAAAAEAEKAAAAAIgABQAAAABEgAIAAAAAIkABAAAAABGgAAAAAIAIUAAAAABABCgAAAAAIAIUAAAAABABCgAAAACIAAUAAAAARIACAAAAACJAAQAAAAARoAAAAACACFAAAAAAQAQoAAAAACACFAAAAAAQAQoAAAAAiAAFAAAAAESAAgAAAAAiQAEAAAAAEaAAAAAAgAhQAAAAAEAEKAAAAAAgAhQAAAAAEAEKAAAAAIgABQAAAABEgAIAAAAAIkABAAAAABGgAAAAAIAIUAAAAABABCgAAAAAIAIUAAAAABABCgAAAACIAAUAAAAARIACAAAAACJAAQAAAAARoAAAAACACFAAAAAAQAQoAAAAACACFAAAAAAQAQoAAAAAiAAFAAAAAESAAgAAAAAiQAEAAAAAEaAAAAAAgAhQAAAAAEAEKAAAAAAgAhQAAAAAEAEKAAAAAIgABQAAAABEgAIAAAAAIkABAAAAABGgAAAAAIAIUABAQNXVSUlJAT+FDw0vmFQwKTs79DwAADvf/Ud2uX+fhTk5ocavqkpKSk4OPQsQbQoACKhiRkpmanZtbajxUw6PD2pwR4sWoecBANj5kopS5lcc07JlqPG3PZWal5JbUxN6HiDKFAAQ0LYzU/JTCqqrQ41ffXX84OpTFQAAEAUp98aX1BwargCouDW5bUpnBQCEpACAgCobJx+RPLSqKtT4ybdXX1k1pHnz0PMAAOwCE2qGx34e7rq/LSn5iJQTw617AAUABFUxLvny5GsqK0ONnzy+5vLaP+Xnh54HAGDnSzu69qrq8V27hhp/2+nJt6Q8sG1b6HmAKFMAQECVG5P/ljKjoiLU+NnF246o2Nq/f+h5AAB2vga12xZUtu3XL9T4lUuTX056P9y6B1AAQFBlT6fPTm+0dm2o8Ru02PbPbRd06xZ6HgCAnS9z2Lbl5bPCXfe3NE+PZRxQWBh6HiDKFAAQUOllqfekNV64MNT4Dc8rv31rauvWoecBANj5Gg2teHzrYeGu+1sWpy1KG7VgQeh5gChTAEBAW1PS1zZoNX16qPGbLyi9dvOw3Nwba2OxWCzJ+QAAdkPv1Q6pHVKbktJ05OYJm+9o0iRUjvJDUwelXRFu3QMoACCobYvi16Qc/MEHocbPOqdiXfmapKRWZ3V7dM/XTjgh9HwAADve/MsLD1+ff9JJWQO3lVaUxOOhcmxrn7oqdevUqaHnA6JMAQAB5Z/bcmLjd95/v7IyOTk5OVyOxvMr7t266LTTQs8HALDjNR62tV/5hFNPDTX+tm3/Wufkj252UpMm06aFng+IMgUABHRwfEp8Sryqat0TWRMbvlJWFipH0ytLP9k8ft99Q88HALDjNb1gy4mb9x04MNT460dlv9nwoy1bEuue0PMBUaYAgDpg7YyG7Rp9MWdOqPHb9dyYvX5uixYPPtX3D33/0L596PkAAH66h5v06jygrG3btpM37leU2axZqByFrza8r/GZX38dej4ABQDUCcWvZRyccc2rr4YaPzW1urq6OhZr1Kl43paJN90Uej4AgJ+u8XllF2x6+9Zb09L+dZ0PZdOtDa5uMOPll0PPB6AAgDph2/jGA7IHjBtXXZ2UFHIv/vanbXq3KHPYsNDzAQD8dG3Wbvj1houPPTbU+Il1TfnnDT5KffCRR0LPBxCLBdsFFPiu919uvL5JZUlJm17FTTemNmy4q8evrf3X/761tSB9z/mHHXZezzkVX3d7553Q8wIA/HBj23b/Yq/Bhx/+synz+n754Vtvhdr3f8XNjWvy2pWUHDixOKloeaNGoecFcAcA1CmFBTkXN0r68stQ4ycWCK3HFw/duOiBB0LPBwDw47XJKDl0/T4PPBDuhX//UtgzZ3bOOTNmhJ4P4N8UAFCHrG/ScEnW4LvuCp2jx8VrXlx9TI8eDy/Y87V+Rw4aFDoPAPD9HtzUY0XvuwYO7P76muLV93XrFjpP0V+z/p51Vfh1DfBvCgCoQ87LnT1t9rSXX179SM7jjV8P91rA5OSampqaWGyPRzY8XvTJww+HnhcA4Pu1W7GpUXHT8eMT1/FQVndsNL3JmtLS8z6de8OsjNdeCz0vwL8pAKAOWv52blHe52+8ETpHj3PWvLCypG/f8ed3/3Ovl4YMCZ0HAPiuxDP/PdLXNF41snfv0HmW5+eemDf49ddD5wC+SwEAdVDJOWnzGxx13XWh3wqQeG1Ql33XVRS2eP750PMCAHxXl5z121a/+/TTKSk1NSFf95dYtxQ1Sv95Vur114eeF+C7FABQB40evWD8rAHz5i29Iy+72aFr1oTO0/GAolHrBjZt+sSyrk/3OP/220PnAQBisccLu9zffb8//KHzK+sHrk1v1ix0nm865nVufu2331702byHZs5bsCB0HuC7FABQhy1fmHtTs5LbbgudI6HPL1feuOy9K66YkN/7rn2O6dgxdB4AiKKx+/T4fY/fd+3a97SVf1y29tJLQ+dJWLE277a8B2+5JXQO4D8L/HIQ4IeYek7jmrx2mza1vb44qWh5Tk7oPIviTZe2yF279oP26zsUbmjVakw8FovFQm43BAC7vxtrY7FYLClp/6HNclocvmpVl4fXlRS+3bJl6FzLY7l7Nz2luHhIxw2frf9Lkyah8wD/mTsAoB5YfGrzdS1X/OEPoXMkdKld36FwQ/PmPd5qX9tpzeTJofMAQBQUHNj+qM5/fOmluvLFP+Gb45v+vsULHhGE+sAdAFCPfHhdzuONX9+yZY+RJWcWH5WZGTpPYrOfKVn5k3rkXHTROa3mDZ9d/NBDoXMBwO7k0YO63dtr4K9+deAjCy+b89l994V+zV/CqhMa/aPJ7C1b9v9i02Ebe2Znh84DfD93AEA9Mr9Z8+dbjr7vvtA5EhILkH0/XHzGwqoHHhhb0f2h3rNOOCF0LgDYHYw9s9uje742fPi+v/rm2gWz7723rnzxT1j0h+blLefefXfoHMAP5w4AqIfeOTTvxWbL1q7t9EjRsHXtw+/6m1AyKqNDgy7V1dOGd7qz66cHHTT6vDkjvsr94IPQuQCgPnlwU48Vve8aOHD/YUsPXjTxww8bPbZ1Udm85OTQuRKWZObd2uzFoqJDWhRdu25Y06ah8wA/nDsAoB5adFKzO/Z49vTTq6qSkurOciAWy5lQvnTrouTk/gOWjfvmtHffHTe2YFLvDfvvHzoXANQHievmoIXLz/zm3fffr2tf/Csrk5OTk2OxBetbjGnZ/eSTQ+cBfjx3AEA99sLQNss6zHz//X4PrWy/tE/d+6K9+U8ZLRu0rqn55IaOrTpnnHrqqIZzv5i1+NlnQ+cCgLpkwp35y/f8xbBh+7y14pDFn73wQs6EuvXFP+HzDm1P6njSlCknxVc8t+S5gw4KnQf48dwBAPXYsg05n7TMHTZsY35mv6xBVVWh8/zfGp5fvmbrqqSkwW8umr+g8C9/mXhqt6KCn118cehcAFAXTHwtf2HPiy+9dHCnJd3n/+1vf6urX/yLirIOzT6qsnJlLHdSzqTjjgudB9h+7gCA3cBje+W/0TPtqquGTF541JzK22+Px2tra2tDp/quxFsDpp/W9otO+S+9NGfasj6L5h1//Jh4LBaL1aVtjQBgx7uxNhaLxZKSekxtf2Xnf7744oDWK/6w5JCjj65rm/sl1NbG4/F4LPbP3l3m9Bh6xRVnly7sMedVm/5BfaYAgN3I87PaPNzh+g8/7J+18oKlN++3X+g832fRa023tuhVWPhNSot1bdIHDx49ena76dMXLw6dCwB2pIeb9Oo8oKxt28591x6/8p2PP86fuPYPa45p3Tp0ru8z/Z52Yzp2nzp1+P3Lb1wyb8iQ0HmAn84jALAb+bpn8vntf3/ooSsOye2U13/TptB5vk+XoesbFM5q0WLQc98cMnfL/PlPnNO1Vfcv7rwzdC4A2BEeL+xyf/f9/vCHwf0XVc/uvWRJffniv6wod++mpxQX1wzO7tHgpsMPD50H2HHcAQC7oXtfzC/tdUvv3od8uLzL4oe/+CLxLH7oXD/U0odzj2p6ycaN86e02K/lHaefft6nc2+YlfHaa6FzAcB/M25ct7P7HHLwwV0mrR+2+rFnn61rr+v9PqXj05tltKyp+aBBp9e6FQ0YcP5v5+49s/KLL0LnAnYcBQDsxh59Pr9ZwXHXXHPgXgvXz3vp1luTk2tr6+Izhv9J4nVDc89s2bj1lJkzV45pPCr3jlGjLjx89u1fvvzZZ6HzARBtD27qsaL3XQMHtluxqVFx0/Hje6SvabxqZO/eKSk1NdXVodP9cNXV8XhSUiz2z5Pzs3qcddVVI6fPL5090R15sDtSAEAEPLO889NdD3300UFVi09b+M5ZZ8Xr6Sc/sYngvPYtave4b968lQuapDX52UUXnddzTsXX3d55J3Q+AHZvY9t2/2KvwYcf3iaj5ND1+zzwQPfX1xSvvq9bt7q6id/3SWwY/OGTnSZ3rXrkkV/c+M0JC1NGjQqdC9h56unXAGB7PPuPdhM6TXvjjX06Lx/1zaAjjgidZ0dZ/UjO441fLytbfkDuu00bv/lm0Q0ZDbPOuvrqiz6b99DMeQsWhM4HQP2S2LSv4bdbYyW3XH9926OLj92QOXx4u/FF96y/Lje3vhbp/7dPz2h/VOc/vvrqye8ve33xZUcfHToPsPPtJqcv4Mf4+5WtR7RvMmNGn/NXTVq2sW/f0Hl2tMSjA8uPb/JRXtm6dUXZWRk5fT7+uOQfmWdmVD7zTJfs5jPyFr3wwsHxKfEp8aqq0HkB2LXeqx1SO6Q2JWX+5YWHr88/6aQmh1R8Wf7FKafkXbX51c2pgwa1+9vG/YoymzVLTa2urk+38v9QMwe0vqb9oBkzjitadduyaf37h84D7DoKAIigxMJn64vzL134wbx5PfqsuW/1AZ07h861q2z5JC07Pae2dv0jDUc1vGrjxk2vpZ/Z4B+rVpX1Sh+WvnzevK23pm5J2/OLL2o2pjRNXrRoUc2Mmmtqb127tnav5IPSx6xcWfV27bStVxUWXvj8nBFzRpSWhj4egKh5aHjBpIJJ2dkph8cHNbijRYv4l9X/rLixTZukfkm3xa9t3jypSdX66i5dujSo3bagsm2/fpnDti0vn9WtW6OhFY9vPax166YjN0/YfEeTJlkDt5VWlOwuv+d/vzl/aXnJHu8vXvzpNWvuW31Afv6YeCwWi9XHhxeA7RWZEx7wXTfWxmKxWFLSXu+3SWk/9+OP92q7smpZj332CZ0LANhxvjqtdV67D2bOzPmwy/qOgwcMcAccRJcCAPg//vJGhzO6fDx58sD8pX9etO/xx0fnNxEA2H0kNveb3rHtSR1PmjLlpPiK55Y8d9BBoXMB4dWb94IDO98pRy7986J9Tzjhwz06d86/bvz4xK77AEDdV1MTj8fjsdiHazqOzO/x5z/74g/83/y+B/xHjz6f36zguGuu2efLZbFvpt18c9Y5FevK16gEAKAuKR2f3iyjZU3NJ2912Nr559dcM3L6/NLZE++8M3QuoO5RAADf6/4jCybtNbWgYM/XCxet2jh1aoelRdeuG5aXFzoXAETZ8lju3k1PKS6e82SLh1s/f8gh5/927t4zK7/4InQuoO5SAAA/2KRnCyYVTEpLi4/Y/NzW5956q/+Slc8vfX7IkHi8tjbxvCEAsHMkrrVfn/6vTf1mfJiyvuPgQYPGxJfFp8TLy0PnA+o+BQCw3R7p3y275zlXXtn3sRV9l62++ebchmXvl76emho6FwDsToqKsg7NPqqy8quD9niwXdI115xdurDHnFfvvjt0LqD+UQAAP9kfBxVMGrQiN7ftx5ufK7xs8uQ+C1dPXj55yJDU1Orq6urQ6QCgfklswvtViz1+3q7btGnLsvNeajTnqKN+HZ8ZnxkvLg6dD6i/FADADjduXLez+xxy8MFdStbvu/q2SZM6DS8atW5g06ahcwFAXbb04dyjml6yceP8KS32a3nH6aef9+ncG2ZlvPZa6FzA7kMBAOx0j2/tMr9g0s0355+4bsXq9pde2uqhTYcVD8zKCp0LAEJadUKjfzSZvWXLoj80L2859+67zzx04dFzh994Y+hcwO5LAQDscuPvzX+q59UXXJD/StH0woa//337CUX3rL8uNzd0LgDYmVbc3Lgmr11JyTcLmnVuvu7++898f+GSuVtvuCF0LiA6FABAcBNP7VZU8LOLL263cUPHotprr+34QFHpundatkxOrqmpqQmdDgB+nMQz/N90zOvc/Npvv12xNu+2vAdvueWcVvOGzy5+6KHQ+YDoUgAAdc6E/N537XNMx45ZJ5YmbRx5001t1m749YaLjz22zXXFSUXLc3LizlwA1CHrLss+J+fyioqlS3P/2Oz1d99d0yL7zYZjr7jiV2/MGfHlgXPmhM4HkGAZDdQbY/fp8fte5UOH5n1S+tWWX1x5ZYuRm58t+aRv3z2uKUnZuDInxx0DAOwMiV/0V9+WU9WkTUlJYc+c2TnnzJhR9Nesv2ddddddNusD6gsFAFDv/enw3nf1vqt58/SXtj5a+d655zb5bOvCsruPOab59Zvf2FTSs2ezR0qP2LxfVpbXEgLw/1JZmZycnByLrT05+82cr7ZsWVfQ8KKcglmzits1mJhZ/tJL5Z83+Cj1wUceOf/tr37z1W/Wrg2dF2B7KQCA3d57tUNqh9SmpMz/aO3PN1y0337pr1RdV/WH/ffPGFI5rvLLAQOyarb1Kx+Qn581uyKrYkaLFqmtqo+vOTg9PbVH9YSq+1NS0lKrX6t+ISUlY17VF5UfpqSk96sqqyyNx91xABBG4hf5ihkpmanZtbXl3VP6pg6uqtpWmTw0+cSqqsqHk69KuamysrJ78sSk57Zt29IzfUt6v8LCLUlpMzI+X7CgfErq6NS9Pv+84uiUW1Ku+OCDbvs1fzX3wY8+Ojg+JT4lXlUV+vgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYFf6/wBohSj257n7rQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMi0xMS0wM1QwNzo0Mjo0NyswMDowMDEzNQ0AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjItMTEtMDNUMDc6NDI6NDcrMDA6MDBAbo2xAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDIyLTExLTAzVDA3OjQyOjQ3KzAwOjAwF3usbgAAAABJRU5ErkJggg=='
				/>
			</defs>
		</svg>
	),
	plus: (
		<svg fill='currentColor' width='14' height='14' viewBox='0 0 14 14'>
			<path d='M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z' />
		</svg>
	),
	success: (
		<svg width='112' height='112' fill='currentColor' viewBox='0 0 16 16'>
			<path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z' />
			<path d='M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z' />
		</svg>
	)
};

export interface JSXSvgElement extends Partial<SVGElement> {
	icon: keyof typeof Icon;
}

export function Svg(props: JSXSvgElement): JSX.Element {
	const { icon } = props;
	return Icon[icon];
}
