FROM buildkite/agent:3

MAINTAINER Mich

COPY environment /buildkite/hooks
COPY vault.py /buildkite/hooks
COPY main.py /buildkite/hooks

RUN apk add --no-cache python3 && pip3 install hvac
CMD ["start", "--token", "848d0d2f2126ec2f703a2d8598a77e86b7df4e308cf8576f09", "--tags",  "queue=mpto-dpd-base-agent","--name", "mpto-dpd-base-agent" ]
