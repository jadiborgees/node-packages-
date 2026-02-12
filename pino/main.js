import pino from "pino"

const log = pino()

log.info("Subiu")
log.warn("atenção")
log.error("deu erro")