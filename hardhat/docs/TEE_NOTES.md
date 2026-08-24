# TEE Executor Notes

One thing I wanted to clarify was the role of the TEE executor.

My first impression was that the executor somehow decided whether the
prediction was YES or NO.

After following the resolution path, I understood the separation better.

The contract needs an executor for the external HTTP request.

The returned data is then processed by the resolution logic.

So I think about the flow like this:

market
  |
  v
TEE service selection
  |
  v
HTTP request
  |
  v
returned data
  |
  v
jq extraction
  |
  v
comparison
  |
  v
market result
