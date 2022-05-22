# Getting Started with Terraform CDK.

The Terraform CDK takes regular programming languages and turns it into JSON that can be read by Terraform to deploy infrastructure.

It uses the [jsii](https://github.com/aws/jsii) library for the polyglot feature where many languages can be used. The Terraform CDK is written in Typescript, so configurations made in the same language don't use `jsii` which is one of the advantages of using Typescript over other languages.  They currently support TypeScript, Python, Java, C#, and Go (experimental)

Terraform acts as the engine to deploy resources, you can still use Terraform modules. The CDK provides an additional abstraction layer that let's developers create powerful abstractions and introduce complex logic that Terraform natively doesn't support.

With the TerraformCDK, you get the power of a regular programming language coupled with the declarative and simplistic power of Terraform. The two complement each other very well.

![TFCDK](https://mktg-content-api-hashicorp.vercel.app/api/assets?product=terraform-cdk&version=v0.10.4&asset=website%2Fdocs%2Fcdktf%2Fterraform-platform.png)

## Installing the CDKTF

In order to use CDKTF, you need:

The Terraform CLI (1.1+).
[Node.js](https://nodejs.org/en/download/) and npm v16+.


**Home-brew Install**:
```
brew install cdktf
```
**NPM Install**:
```
npm install --global cdktf-cli@latest
```


Verify installation:
```
cdktf help
```

