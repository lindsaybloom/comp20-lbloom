# Messages Part 2

What has been completed: Everything
Collaborated with: Ming
Hours spent completing assignment: 3

Question: Is it possible to request the data from a different origin (e.g., http://messagehub.herokuapp.com/) or from your local machine (from file:///) from using XMLHttpRequest? Why or why not?

No it is not possible to request data from a different origin or from your local machine. This is for security reasons and "is a critical security mechanism for isolating potentially malicious documents" (source: MDN). There are 2 exceptions, however:

Trust Zones: if both domains are in highly trusted zone e.g, corporate domains, then the same origin limitations are not applied

Port: IE doesn't include port into Same Origin components, therefore http://company.com:81/index.html and http://company.com/index.html are considered from same origin and no restrictions are applied.

(source: MDN)

This policy also controls interactions between two different origins, like a XMLHttpRequest. The interactions are put in three categories:

1) Cross-origin writes are typically allowed. Examples are links, redirects and form submissions. Certain rarely used HTTP requests require preflight.

2) Cross-origin embedding is typically allowed. Examples are listed below.

3) Cross-origin reads are typically not allowed, but read access is often leaked by embedding. For example you can read the width and height of an embedded image, the actions of an embedded script, or the availability of an embedded resource.

(source: MDN)