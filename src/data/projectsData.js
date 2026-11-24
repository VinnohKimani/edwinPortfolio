export const projectsData = [
  {
    id: "terraform-aws-architecture",
    number: "01",
    isFeatured: true,
    tag: "Featured Project / 01",
    title: "AWS Infrastructure as Code with Terraform",
    subtitle:
      "Modular, version-controlled AWS infrastructure built to eliminate manual console clicks and avoid state drift.",
    techStack: ["AWS", "Terraform", "VPC", "EC2", "ALB", "S3", "IAM", "DynamoDB"],
    highlights: [
      "Modular setup separating compute, networking, and production configs",
      "Remote state locking with S3 and DynamoDB to prevent concurrent writes",
      "Repeatable multi-AZ deployment ready for containerized workloads",
    ],
    githubUrl: "https://github.com/kimruto68/terraform-aws-architecture",
    articleUrl:
      "https://medium.com/@kimruto68/avoid-my-mistakes-pushing-your-iac-project-to-github-without-hitting-file-size-limits-059921437061",
    context:
      "When I started practicing cloud architecture, I initially provisioned services by hand in the AWS Management Console. It works fine for quick testing, but it quickly became tedious to reproduce and almost impossible to track what changed. I built this repository to transition completely to Infrastructure as Code (IaC) using Terraform.",
    problemStatement:
      "Setting up AWS environments by hand creates consistency issues, security oversights, and makes teardowns or recreations a headache. I needed a clean codebase where any engineer could clone the repo, run a couple of Terraform commands, and get the exact same isolated infrastructure every single time.",
    whatIBuilt: [
      "Reusable compute modules for web servers and Docker hosts",
      "A dedicated bootstrap pipeline configuring S3 buckets with encryption and DynamoDB tables for state locking",
      "Clear separation between reusable generic modules and live production environments",
      "Network isolation with private subnets, security group rules, and an Application Load Balancer",
    ],
    technicalDecisions: [
      {
        question: "Why Terraform?",
        answer:
          "It's declarative and widely adopted. Being able to review an execution plan (terraform plan) before touching live cloud resources saves a ton of stress and prevents unintended destructive changes.",
      },
      {
        question: "Why split into modules?",
        answer:
          "Throwing everything into a single massive main.tf becomes unreadable very fast. Modularizing compute and network definitions lets me reuse them across different workloads without copying and pasting blocks of code.",
      },
      {
        question: "Why remote state with S3 and DynamoDB?",
        answer:
          "Local state files are dangerous: they risk getting lost, checked into Git by accident with sensitive credentials, or corrupted by conflicting concurrent applies. Storing state in encrypted S3 with DynamoDB locking solves this completely.",
      },
      {
        question: "How are environments kept apart?",
        answer:
          "The repository keeps generic module definitions in /modules and active workloads in /live/production. This structure makes it straightforward to add a staging or dev folder later without rewriting the core modules.",
      },
      {
        question: "How is security handled?",
        answer:
          "No instances sit open to 0.0.0.0/0 on sensitive ports. Security groups restrict inbound traffic strictly to the load balancer, while IAM roles follow least privilege principles.",
      },
      {
        question: "How does it scale?",
        answer:
          "Traffic hits an Application Load Balancer that routes across EC2 instances spanning multiple Availability Zones. Rather than running a monolithic machine, the tier can scale horizontally with an Auto Scaling group.",
      },
    ],
    repoStructure: [
      "terraform-aws-architecture/",
      "├── bootstrap/",
      "│   └── remote-state/         # S3 backend & DynamoDB lock configuration",
      "├── modules/",
      "│   ├── compute/              # EC2 & instance launch configurations",
      "│   ├── Dockerised-portfolio/ # Container runtime setup",
      "│   └── aws-devops-portfolio/ # Supporting automation helpers",
      "└── live/",
      "    └── production/",
      "        ├── docker_server/    # Live container production state",
      "        └── web_server/       # Production web server deployment",
    ],
    lessonsLearned:
      "My biggest takeaway was respecting state management and .gitignore discipline early on. I previously ran into Git file size issues when local Terraform providers and states were accidentally staged. Once I separated state bootstrapping and modularized my code, running deployments became predictable and stress-free.",
  },
  {
    id: "resilient-web-architecture",
    number: "02",
    tag: "AWS Architecture / 02",
    title: "Built for more than one server",
    subtitle:
      "A resilient multi-AZ web setup using Application Load Balancing, Auto Scaling, and declarative Terraform definitions.",
    techStack: ["AWS", "EC2", "ALB", "Auto Scaling", "Terraform", "Route 53"],
    pipeline: [
      { label: "Internet", icon: "Globe" },
      { label: "Load Balancer", icon: "Share2" },
      { label: "EC2 Instances", icon: "Server" },
      { label: "Auto Scaling", icon: "Database" },
    ],
    githubUrl: "https://github.com/kimruto68",
    context:
      "Relying on a single EC2 server is a gamble: a hardware failure, memory spike, or unexpected reboot takes the whole application down. This project explores high-availability patterns on AWS.",
    problemStatement:
      "How do you design a web tier that absorbs unexpected traffic surges and survives the failure of an entire AWS Availability Zone without dropping user requests?",
    whatIBuilt: [
      "Application Load Balancer (ALB) acting as the single public entry point",
      "Auto Scaling group configured across multiple Availability Zones",
      "Health check rules that automatically cycle out failing instances without manual intervention",
      "Target groups balancing HTTP traffic cleanly across active instances",
    ],
    technicalDecisions: [
      {
        question: "Why an Application Load Balancer instead of Network LB?",
        answer:
          "ALBs operate at Layer 7, allowing intelligent HTTP/HTTPS path routing, SSL termination, and native integration with EC2 target groups.",
      },
      {
        question: "Why multi-AZ redundancy?",
        answer:
          "Datacenters have power outages and fiber cuts. Distributing compute across AZs means an issue in us-east-1a won't knock out the service running in us-east-1b.",
      },
    ],
    lessonsLearned:
      "Stateless compute makes life dramatically easier. Once you offload session data and file storage away from the local EC2 disk, terminating and replacing instances on the fly becomes seamless.",
  },
  {
    id: "application-to-container",
    number: "03",
    tag: "Containers & Deployment / 03",
    title: "From application to container",
    subtitle:
      "Packaging application runtimes into reproducible Docker containers published directly to Docker Hub.",
    techStack: ["Docker", "Docker Hub", "Linux", "Bash", "Node.js"],
    pipeline: [
      { label: "Application", icon: "FileCode" },
      { label: "Docker Image", icon: "Box" },
      { label: "Docker Hub", icon: "Cloud" },
      { label: "Deploy", icon: "Server" },
    ],
    githubUrl: "https://github.com/kimruto68",
    context:
      "Differences in OS versions, Node runtimes, and local packages frequently cause issues when deploying code to remote Linux instances. Containerization was the answer.",
    problemStatement:
      "How to ensure an application runs identically on my development machine, inside test environments, and across live production EC2 instances without manual dependency installation.",
    whatIBuilt: [
      "Optimized multi-stage Dockerfiles that minimize final image sizes",
      "Docker Hub registry automated pipeline with versioned tags",
      "Standardized environment variable passing and process management",
    ],
    technicalDecisions: [
      {
        question: "Why multi-stage builds?",
        answer:
          "Build tools and devDependencies aren't needed in production. Multi-stage builds keep the shipped image lightweight and secure.",
      },
      {
        question: "Why Docker Hub?",
        answer:
          "It provides a dependable, publicly accessible registry that EC2 startup user-data scripts can pull from directly.",
      },
    ],
    lessonsLearned:
      "Keeping container images minimal not only speeds up startup and deployment times on EC2, but it also minimizes potential vulnerabilities in installed base packages.",
  },
  {
    id: "networking-security-foundations",
    number: "04",
    tag: "Networking & Security / 04",
    title: "Clear boundaries. Connected systems.",
    subtitle:
      "VPC architecture designed around isolated subnets, controlled route tables, and strict security groups.",
    techStack: ["AWS VPC", "Subnets", "Route Tables", "Internet Gateway", "NAT Gateway", "Security Groups"],
    pipeline: [
      { label: "Internet", icon: "Globe" },
      { label: "VPC & Routing", icon: "Network" },
      { label: "Boundaries", icon: "ShieldCheck" },
      { label: "Workloads", icon: "Server" },
    ],
    githubUrl: "https://github.com/kimruto68",
    context:
      "The default VPC is great for quickly launching an instance, but it is not built for production workloads. Creating a custom VPC with explicit network boundaries is the baseline for real cloud security.",
    problemStatement:
      "Backend workloads and databases should never have public IP addresses or direct inbound internet exposure, yet they still need to install security patches and communicate securely.",
    whatIBuilt: [
      "Custom /16 VPC with paired public and private subnets across two AZs",
      "Internet Gateway for public traffic and NAT Gateway for private egress",
      "Layered security groups restricting communication strictly between the web tier and internal services",
    ],
    technicalDecisions: [
      {
        question: "Why private subnets?",
        answer:
          "If a database or internal API doesn't need to talk directly to users, placing it in a private subnet removes an entire category of internet-borne attacks.",
      },
      {
        question: "Why explicit route tables?",
        answer:
          "Explicit routing ensures there's no accidental route leaking. Public subnets point to the IGW; private subnets point only to the NAT.",
      },
    ],
    lessonsLearned:
      "Getting your CIDR blocks and subnet math planned upfront saves hours of headache later. Re-architecting an active VPC after services are deployed is something you want to avoid.",
  },
  {
    id: "aws-automation-operations",
    number: "05",
    tag: "Automation & Operations / 05",
    title: "Less uncertainty. More visibility.",
    subtitle:
      "Practical AWS scripts and operational routines to monitor cloud spending, catch orphaned resources, and keep bills in check.",
    techStack: ["AWS CLI", "Python", "Boto3", "CloudWatch", "Cost Management"],
    pipeline: [
      { label: "Local Script", icon: "Terminal" },
      { label: "AWS API", icon: "Cloud" },
      { label: "Visibility", icon: "Activity" },
    ],
    githubUrl: "https://github.com/kimruto68",
    context:
      "Anyone who has spent time on AWS knows the dread of opening the Cost Management dashboard at the end of the month to find an unattached EBS volume or idle NAT Gateway that you forgot to destroy.",
    problemStatement:
      "How to maintain continuous awareness of active cloud resources and spending without manually clicking through dozens of service consoles across multiple regions.",
    whatIBuilt: [
      "Auditing scripts that query the AWS API for unattached volumes, idle elastic IPs, and running instances",
      "Billing alert thresholds that trigger notifications before budget limits are breached",
      "Teardown routines for ephemeral lab environments",
    ],
    technicalDecisions: [
      {
        question: "Why script it locally?",
        answer:
          "A fast CLI command or script gives instant feedback before logging off for the day without logging in through the web console and MFA.",
      },
      {
        question: "Why track orphaned resources?",
        answer:
          "Unattached EBS volumes and unassociated Elastic IPs incur real hourly charges even when no EC2 instances are running.",
      },
    ],
    lessonsLearned:
      "Cost optimization is an engineering discipline, not an afterthought. The best architecture is one that solves the business problem while keeping operational waste to zero.",
  },
];
