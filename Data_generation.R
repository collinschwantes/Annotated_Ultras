setwd("/Users/featherlite569/Documents/NMNH/wasp_app/demoweb")
hao_terms <- read.csv(file = "./HAO_terms.csv")
hao_terms <- hao_terms[!duplicated(hao_terms[,1]),]
hao_terms[,1] <- capitalize(hao_terms[,1])
write(toJSON(hao_terms),file = "hao_terms.json")